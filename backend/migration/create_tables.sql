CREATE TABLE profile (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  summary TEXT,
  email TEXT,
  github TEXT,
  linkedin TEXT
);

CREATE TABLE experiences (
  id SERIAL PRIMARY KEY,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  description TEXT
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  tech_stack TEXT,
  repo_url TEXT,
  live_url TEXT
);

CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  level TEXT NOT NULL
);

-- psql -U postgres -d golang_api -f migration/seed_data.sql

