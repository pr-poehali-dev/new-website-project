"""
Business: Save and retrieve user mockup concepts
Args: event with httpMethod, body (user_id, product_id, mockup_url, etc), headers (X-User-Token)
Returns: HTTP response with concept data or list of concepts
"""

import json
import os
from typing import Dict, Any
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': 'Database configuration missing'})
        }
    
    conn = psycopg2.connect(database_url, cursor_factory=RealDictCursor)
    cursor = conn.cursor()
    
    try:
        if method == 'POST':
            body_data = json.loads(event.get('body', '{}'))
            
            user_id = body_data.get('user_id')
            product_id = body_data.get('product_id')
            product_title = body_data.get('product_title')
            custom_text = body_data.get('custom_text', '')
            logo_url = body_data.get('logo_url', '')
            mockup_url = body_data.get('mockup_url')
            
            if not user_id or not product_id or not mockup_url:
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'body': json.dumps({'error': 'user_id, product_id and mockup_url are required'})
                }
            
            cursor.execute(
                """
                INSERT INTO concepts (user_id, product_id, product_title, custom_text, logo_url, mockup_url)
                VALUES (%s, %s, %s, %s, %s, %s)
                RETURNING id, user_id, product_id, product_title, custom_text, logo_url, mockup_url, created_at
                """,
                (user_id, product_id, product_title, custom_text, logo_url, mockup_url)
            )
            concept = cursor.fetchone()
            conn.commit()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({
                    'success': True,
                    'concept': dict(concept)
                }, default=str)
            }
        
        elif method == 'GET':
            query_params = event.get('queryStringParameters', {}) or {}
            user_id = query_params.get('user_id')
            
            if not user_id:
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'body': json.dumps({'error': 'user_id is required'})
                }
            
            cursor.execute(
                """
                SELECT id, user_id, product_id, product_title, custom_text, logo_url, mockup_url, created_at
                FROM concepts
                WHERE user_id = %s
                ORDER BY created_at DESC
                """,
                (user_id,)
            )
            concepts = cursor.fetchall()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({
                    'success': True,
                    'concepts': [dict(c) for c in concepts]
                }, default=str)
            }
        
        return {
            'statusCode': 405,
            'headers': headers,
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    except Exception as e:
        conn.rollback()
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': str(e)})
        }
    finally:
        cursor.close()
        conn.close()
