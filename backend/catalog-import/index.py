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
        
        category_tables = {
            'kamennaya-istoriya': 'kamennaya_istoriya',
            'steklyannye-nagrady': 'steklyannye_nagrady',
            'akrilovye-izdeliya': 'akrilovye_izdeliya',
            'predmety-v-smole': 'predmety_v_smole',
            'izdeliya-iz-drevesiny': 'izdeliya_iz_drevesiny',
            'izdeliya-iz-metalla': 'izdeliya_iz_metalla',
            'diplomy-i-plaketki': 'diplomy_i_plaketki',
            'izdeliya-s-3d-obektami': 'izdeliya_s_3d_obektami'
        }
        
        imported_count = 0
        for item in items:
            category = item.get('категория', '')
            table_name = category_tables.get(category)
            
            if not table_name:
                continue
            
            insert_query = f"""
                INSERT INTO {table_name} (name, description, price, image_url)
                VALUES (%s, %s, %s, %s)
            """
            
            cursor.execute(insert_query, (
                item.get('название', ''),
                item.get('описание', ''),
                int(item.get('цена', 0)),
                item.get('изображение_url', '')
            ))
            imported_count += 1
        
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
                'imported_count': imported_count,
                'message': f'Successfully imported {imported_count} items'
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
        
        category_tables = {
            'kamennaya-istoriya': 'kamennaya_istoriya',
            'steklyannye-nagrady': 'steklyannye_nagrady',
            'akrilovye-izdeliya': 'akrilovye_izdeliya',
            'predmety-v-smole': 'predmety_v_smole',
            'izdeliya-iz-drevesiny': 'izdeliya_iz_drevesiny',
            'izdeliya-iz-metalla': 'izdeliya_iz_metalla',
            'diplomy-i-plaketki': 'diplomy_i_plaketki',
            'izdeliya-s-3d-obektami': 'izdeliya_s_3d_obektami'
        }
        
        if not category or category not in category_tables:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'success': False, 'error': 'Invalid or missing category'}),
                'isBase64Encoded': False
            }
        
        conn = psycopg2.connect(database_url)
        cursor = conn.cursor()
        
        table_name = category_tables[category]
        query = f"SELECT id, name, description, price, image_url, created_at FROM {table_name} ORDER BY created_at DESC"
        cursor.execute(query)
        
        rows = cursor.fetchall()
        items = []
        for row in rows:
            items.append({
                'id': row[0],
                'name': row[1],
                'description': row[2],
                'price': row[3],
                'image_url': row[4],
                'created_at': row[5].isoformat() if row[5] else None
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