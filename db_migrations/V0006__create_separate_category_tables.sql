
-- Создаём отдельные таблицы для каждой категории

CREATE TABLE IF NOT EXISTS kamennaya_istoriya (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS steklyannye_nagrady (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS akrilovye_izdeliya (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS predmety_v_smole (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS izdeliya_iz_drevesiny (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS izdeliya_iz_metalla (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS diplomy_i_plaketki (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS izdeliya_s_3d_obektami (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Переносим данные из catalog_items в соответствующие таблицы
INSERT INTO kamennaya_istoriya (name, description, price, image_url)
SELECT name, description, price, image_url FROM catalog_items WHERE category = 'kamennaya-istoriya';

INSERT INTO steklyannye_nagrady (name, description, price, image_url)
SELECT name, description, price, image_url FROM catalog_items WHERE category = 'steklyannye-nagrady';

INSERT INTO akrilovye_izdeliya (name, description, price, image_url)
SELECT name, description, price, image_url FROM catalog_items WHERE category = 'akrilovye-izdeliya';

INSERT INTO predmety_v_smole (name, description, price, image_url)
SELECT name, description, price, image_url FROM catalog_items WHERE category = 'predmety-v-smole';

INSERT INTO izdeliya_iz_drevesiny (name, description, price, image_url)
SELECT name, description, price, image_url FROM catalog_items WHERE category = 'izdeliya-iz-drevesiny';

INSERT INTO izdeliya_iz_metalla (name, description, price, image_url)
SELECT name, description, price, image_url FROM catalog_items WHERE category = 'izdeliya-iz-metalla';

INSERT INTO diplomy_i_plaketki (name, description, price, image_url)
SELECT name, description, price, image_url FROM catalog_items WHERE category = 'diplomy-i-plaketki';

INSERT INTO izdeliya_s_3d_obektami (name, description, price, image_url)
SELECT name, description, price, image_url FROM catalog_items WHERE category = 'izdeliya-s-3d-obektami';
