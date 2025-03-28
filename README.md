# Feli Project

Welcome to the **Feli Project**. This repository contains both the frontend and backend components necessary to run the application.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Routes](#api-routes)

## Project Structure

The repository is organized as follows:

- `feli-backend/`: Contains the backend codebase.
- `feli-frontend/`: Contains the frontend codebase.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/): JavaScript runtime environment.
- [npm](https://www.npmjs.com/): Node package manager (comes with Node.js).
- [MongoDB](https://www.mongodb.com/): NoSQL database.

### Installing MongoDB


#### For macOS:

1. **Install Homebrew** (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. **Install MongoDB:**
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community@7.0
   ```
3. **Start MongoDB:**
   ```bash
   brew services start mongodb/brew/mongodb-community
   ```

## Installation

### Backend Setup

```bash
cd feli-backend
npm install
```

Create a `.env` file and configure environment variables. 

```bash
MONGO_URI=mongodb://localhost:27017/mydatabase
JWT_SECRET=ajlsdjlfkasn
PORT=3001
```

Then, start the server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd feli-frontend
npm install
npm start
```

Create a `.env.local` file and configure environment variables. 

```NEXT_PUBLIC_BACKEND_URL=http://localhost:3001```


The frontend should now be running on `http://localhost:3000`.

## API Routes

- **`GET /api/campaigns`** - Retrieve all campaigns.
- **`POST /api/login`** - Create a new campaign.
- **`POST /api/signup`** - Create a new campaign.
- **`POST /api/logout`** - Create a new campaign.