"""
Business: User registration and authentication API
Args: event with httpMethod, body (email, password, name, phone)
Returns: HTTP response with user data and session token
"""

import json
import os
import hashlib
import secrets
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
            action = body_data.get('action', 'login')
            
            if action == 'register':
                email = body_data.get('email', '').strip().lower()
                password = body_data.get('password', '')
                name = body_data.get('name', '').strip()
                phone = body_data.get('phone', '').strip()
                
                if not email or not password or not name:
                    return {
                        'statusCode': 400,
                        'headers': headers,
                        'body': json.dumps({'error': 'Email, password and name are required'})
                    }
                
                cursor.execute("SELECT id FROM users WHERE email = %s", (email,))
                if cursor.fetchone():
                    return {
                        'statusCode': 400,
                        'headers': headers,
                        'body': json.dumps({'error': 'User with this email already exists'})
                    }
                
                password_hash = hashlib.sha256(password.encode()).hexdigest()
                token = secrets.token_urlsafe(32)
                
                cursor.execute(
                    """
                    INSERT INTO users (email, password_hash, name, phone, profile_completed)
                    VALUES (%s, %s, %s, %s, false)
                    RETURNING id, email, name, phone, created_at, company_name, company_inn, profile_completed
                    """,
                    (email, password_hash, name, phone if phone else None)
                )
                user = cursor.fetchone()
                conn.commit()
                
                return {
                    'statusCode': 200,
                    'headers': headers,
                    'body': json.dumps({
                        'success': True,
                        'user': dict(user),
                        'token': token
                    }, default=str)
                }
            
            elif action == 'login':
                email = body_data.get('email', '').strip().lower()
                password = body_data.get('password', '')
                
                if not email or not password:
                    return {
                        'statusCode': 400,
                        'headers': headers,
                        'body': json.dumps({'error': 'Email and password are required'})
                    }
                
                password_hash = hashlib.sha256(password.encode()).hexdigest()
                
                cursor.execute(
                    """
                    SELECT id, email, name, phone, created_at, company_name, company_inn, profile_completed
                    FROM users
                    WHERE email = %s AND password_hash = %s
                    """,
                    (email, password_hash)
                )
                user = cursor.fetchone()
                
                if not user:
                    return {
                        'statusCode': 401,
                        'headers': headers,
                        'body': json.dumps({'error': 'Invalid email or password'})
                    }
                
                token = secrets.token_urlsafe(32)
                
                return {
                    'statusCode': 200,
                    'headers': headers,
                    'body': json.dumps({
                        'success': True,
                        'user': dict(user),
                        'token': token
                    }, default=str)
                }
            
            elif action == 'update_profile':
                user_id = body_data.get('user_id')
                company_name = body_data.get('company_name', '').strip()
                company_inn = body_data.get('company_inn', '').strip()
                
                if not user_id or not company_name or not company_inn:
                    return {
                        'statusCode': 400,
                        'headers': headers,
                        'body': json.dumps({'error': 'user_id, company_name and company_inn are required'})
                    }
                
                if len(company_inn) not in [10, 12]:
                    return {
                        'statusCode': 400,
                        'headers': headers,
                        'body': json.dumps({'error': 'INN must be 10 or 12 digits'})
                    }
                
                cursor.execute(
                    """
                    UPDATE users
                    SET company_name = %s, company_inn = %s, profile_completed = true, updated_at = CURRENT_TIMESTAMP
                    WHERE id = %s
                    RETURNING id, email, name, phone, company_name, company_inn, profile_completed, created_at
                    """,
                    (company_name, company_inn, user_id)
                )
                user = cursor.fetchone()
                conn.commit()
                
                if not user:
                    return {
                        'statusCode': 404,
                        'headers': headers,
                        'body': json.dumps({'error': 'User not found'})
                    }
                
                return {
                    'statusCode': 200,
                    'headers': headers,
                    'body': json.dumps({
                        'success': True,
                        'user': dict(user)
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