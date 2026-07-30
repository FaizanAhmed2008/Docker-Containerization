# 🐳 Docker Containerization Practice

This repository contains multiple sample applications containerized using **Docker**. It was created as a hands-on learning project to understand Docker fundamentals, image creation, containerization, and multi-container application management with **Docker Compose**.

## 🎯 Learning Objectives

This project was built to practice:

* Writing Dockerfiles for different application stacks
* Building and managing Docker images
* Running applications inside containers
* Multi-container orchestration using Docker Compose
* Container networking
* Understanding the Docker development workflow

## 📦 Applications Included

| Application     | Technology       | Default Port |
| --------------- | ---------------- | ------------ |
| Node.js App     | Node.js          | **3000**     |
| Python App      | Flask (Python)   | **4000**     |
| Spring Boot App | Java Spring Boot | **8080**     |

Each application has its own **Dockerfile** located inside its respective project directory.

## 📁 Project Structure

```text
.
├── docker-compose.yml
├── node/
│   └── Dockerfile
├── python/
│   └── Dockerfile
└── springboot/
    └── Dockerfile
```

## 🚀 Running the Project

Clone the repository:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

Start all applications with Docker Compose:

```bash
docker compose up --build
```

Or, if you're using an older Docker Compose version:

```bash
docker-compose up --build
```

## 🌐 Access the Applications

After all containers start successfully, the applications will be available at:

* **Node.js App:** http://localhost:3000
* **Python (Flask) App:** http://localhost:4000
* **Spring Boot App:** http://localhost:8080

## 🛠️ Technologies Used

* Docker
* Docker Compose
* Node.js
* Python (Flask)
* Spring Boot

## 📚 Purpose

The goal of this repository is to gain practical experience with Docker by containerizing applications built with different technologies and running them together using Docker Compose. This project serves as a reference for learning containerization concepts and understanding how multi-container applications are managed in a local development environment.

> **Note:** This repository was created for learning and practice purposes and is not intended for production use.
