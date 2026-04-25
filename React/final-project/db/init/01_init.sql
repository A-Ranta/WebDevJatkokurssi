CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);

INSERT INTO users (name, email)
VALUES
    ('Alice', 'alice@example.com'),
    ('Bob', 'bob@example.com')
ON CONFLICT (email) DO NOTHING;

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(15) NOT NULL
        CHECK (char_length(name) >= 2),
    email VARCHAR(255) NOT NULL,
    game VARCHAR(100) NOT NULL,
    terms_accepted BOOLEAN NOT NULL
        CHECK (terms_accepted = true),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);