# Full Stack JS Application Deployable to Netlify

This app uses React, Express running with Netlify serverless functions and Supabase for Postgres DB.

## Running the Project

### Supabase Setup

Create an account. Create a new project and a new table (`posts`).

Posts table schema:
- id (int8)
- title (varchar)
- content (text)
- created_at (timestampz)

Make sure to disable "RLS" for the table, to ensure that anon users can read and write to your table without needing to authenticate (outside of the scope of this app).

Fill out project `.env` file (and matching Environment Variables on Netlify) with the values that you can find under Project Settings > API. It'll be Project URL (`DATABASE_URL`) and anon public API key (`SUPABASE_SERVICE_API_KEY`).

## Making it Your Own

### Project Dependencies

Make sure to check out this project's `package.json` for all the dependencies and scripts required for Netlify.

Also make sure to create `netlify.toml` in your project, also required for Netlify config.

### Project Setup

Serverless functions are setup in `/functions` folder. Note that we need to use `serverless-http` wrapper over our Express app to make it work as Netlify function.

Express code is setup in `/server` folder. 