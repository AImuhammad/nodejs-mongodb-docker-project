# Node.js MongoDB Docker Project

## Overview

This project demonstrates how to containerize a Node.js application using Docker and prepare it for deployment with Docker Compose and MongoDB.

## Technologies Used

- Node.js 22
- Express.js
- Docker
- Docker Compose
- MongoDB
- Ubuntu 24.04

## Project Structure

```
nodejs-mongodb-docker-project/
│
├── app/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── Dockerfile
│   └── .dockerignore
│
├── docker-compose.yml
├── README.md
├── .gitignore
├── screenshots/
└── docs/
```

## Features

- Node.js REST API
- Dockerized application
- Docker Compose support
- MongoDB integration
- Persistent database storage
- Environment variable configuration

## Running the Application

### Run Locally

```bash
cd app
npm install
node server.js
```

Visit:

```
http://localhost:3000
```

### Build Docker Image

```bash
cd app
docker build -t nodejs-api:v1 .
```

### Run Docker Container

```bash
docker run -d --name node-api -p 3000:3000 nodejs-api:v1
```

### Run with Docker Compose

```bash
docker-compose up --build -d
```

## API Response

```json
{
  "message": "Hello from Docker Compose!",
  "author": "Muhammad Abdurrauf",
  "project": "Node.js + MongoDB + Docker"
}
```

## Screenshots

- Project Structure
- npm Initialization
- Express Installation
- Local Application Running
- Browser Output
- Docker Image Build
- Running Container
- Docker Logs
- Docker Compose
- MongoDB Integration

## Learning Outcomes

- Building a Node.js REST API
- Creating Docker images
- Running containers
- Using Docker Compose
- Connecting to MongoDB
- Preparing applications for CI/CD
- Preparing applications for Kubernetes deployment

## Author

**Muhammad Abdurrauf**
