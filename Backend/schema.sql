-- Create the Museum_Exhibit schema
CREATE SCHEMA Museum_Exhibit;

-- Set the search path to Museum_Exhibit
SET search_path TO Museum_Exhibit;

-- Create Artifacts table
CREATE TABLE Artifacts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    multimedia_links TEXT[]
);

-- Create Quizzes table
CREATE TABLE Quizzes (
    id SERIAL PRIMARY KEY,
    artifact_id INT REFERENCES Artifacts(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    options TEXT[] NOT NULL,
    correct_answer TEXT NOT NULL
);

-- Create Visitors table
CREATE TABLE Visitors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    interactions JSONB,
    quiz_scores JSONB,
    progress JSONB
);

-- Create Admins table
CREATE TABLE Admins (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(50) DEFAULT 'admin'
);

-- -- Example of granting privileges (optional based on app needs)
-- GRANT USAGE ON SCHEMA Museum_Exhibit TO public;
-- GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA Museum_Exhibit TO public;