import json
import os
from typing import Dict, Any, List
import psycopg2
from psycopg2.extras import execute_batch

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Import catalog items from CSV data into database
    Args: event - dict with httpMethod, body containing items array
          context - object with request_id, function_name attributes
    Returns: HTTP response with import results
    '''
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        items: List[Dict[str, str]] = body_data.get('items', [])
        
        if not items:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'success': False, 'error': 'No items provided'}),
                'isBase64Encoded': False
            }
        
        database_url = os.environ.get('DATABASE_URL')
        if not database_url:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'success': False, 'error': 'Database not configured'}),
                'isBase64Encoded': False
            }
        
        conn = psycopg2.connect(database_url)
        cursor = conn.cursor()
        
        insert_query = """
            INSERT INTO catalog_items (name, description, price, category, image_url)
            VALUES (%s, %s, %s, %s, %s)
        """
        
        rows = []
        for item in items:
            rows.append((
                item.get('название', ''),
                item.get('описание', ''),
                int(item.get('цена', 0)),
                item.get('категория', ''),
                item.get('изображение_url', '')
            ))
        
        execute_batch(cursor, insert_query, rows)
        conn.commit()
        
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'imported_count': len(items),
                'message': f'Successfully imported {len(items)} items'
            }),
            'isBase64Encoded': False
        }
    
    if method == 'GET':
        category = event.get('queryStringParameters', {}).get('category')
        
        database_url = os.environ.get('DATABASE_URL')
        if not database_url:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'success': False, 'error': 'Database not configured'}),
                'isBase64Encoded': False
            }
        
        conn = psycopg2.connect(database_url)
        cursor = conn.cursor()
        
        if category:
            cursor.execute(
                "SELECT id, name, description, price, category, image_url, created_at FROM catalog_items WHERE category = %s ORDER BY created_at DESC",
                (category,)
            )
        else:
            cursor.execute(
                "SELECT id, name, description, price, category, image_url, created_at FROM catalog_items ORDER BY created_at DESC"
            )
        
        rows = cursor.fetchall()
        items = []
        for row in rows:
            items.append({
                'id': row[0],
                'name': row[1],
                'description': row[2],
                'price': row[3],
                'category': row[4],
                'image_url': row[5],
                'created_at': row[6].isoformat() if row[6] else None
            })
        
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'items': items,
                'count': len(items)
            }),
            'isBase64Encoded': False
        }
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'}),
        'isBase64Encoded': False
    }
