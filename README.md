# HodlInfo Clone with EJS

A simple web application that fetches cryptocurrency data from the WazirX API and displays it on a web page. This project is built using Node.js, Express, EJS (Embedded JavaScript templates), and PostgreSQL.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Features

- Fetches cryptocurrency data from the WazirX API.
- Stores the data in a PostgreSQL database.
- Displays the data on a web page using EJS templates.
- Provides a simple web interface to view the cryptocurrency data.

## Project Structure
The project structure is organized as follows:

- `config/db.js`: The configuration di for postresql database.
- `public/`: Directory for static assets like CSS and assets like images.
- `views/`: EJS templates for rendering HTML.
- `index.js`: Main server file.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- PostgreSQL installed and configured.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/vivek-tripathi-9005/hodlinfo-clone-ejs.git
```

2. Install project dependencies:
```bash
cd hodlinfo-clone-ejs
npm install
```


3. create a `.env` file at root of the directory:
```bash
touch .env
```

4. Add following environment variables to the `.env` file:
```env
USERNAME=__YOUR_DB_USERNAME__
PASSWORD=__YOUR_DB_PASSWORD__
DBPORT=__YOUR_DB_PORT__
```

5. Start postresql, if not already started or head over to PostgreSQL if not installed yet:

6. Create `wazirxdb` database;
```psql
CREATE DATABASE wazirxdb
```

7. Create a table `stocks` in the above database:
```
\c wazirxdb;
CREATE TABLE stocks(
    name VARCHAR (255) PRIMARY KEY,
    last VARCHAR (255),
    buy VARCHAR (255),
    sell VARCHAR (255),
    volume VARCHAR (255),
    base_unit VARCHAR (255)
);
```

8. Start the Express server:
```bash
npm run start
```

## Usage
- Access the web application at `http://localhost:3000`.
