-- Добавляем поля профиля компании в таблицу users
ALTER TABLE users 
ADD COLUMN company_name VARCHAR(255),
ADD COLUMN company_inn VARCHAR(12),
ADD COLUMN profile_completed BOOLEAN DEFAULT false;

-- Создаем индекс для быстрого поиска по ИНН
CREATE INDEX idx_users_company_inn ON users(company_inn);

-- Обновляем существующих пользователей (у них профиль не заполнен)
UPDATE users SET profile_completed = false WHERE profile_completed IS NULL;