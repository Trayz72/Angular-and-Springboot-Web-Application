# Full Stack Web Application

This repository contains a **full-stack web application** built with a **modern Angular frontend** and a **Spring Boot backend**, developed on **Ubuntu Linux**.

The project is structured with a clear separation between frontend and backend, following industry best practices.

---

## 🧱 Tech Stack

### Frontend

* **Angular (latest, standalone architecture)**
* TypeScript
* Angular CLI
* HttpClient for REST communication

### Backend

* **Spring Boot**
* Java **17+**
* Maven (with Maven Wrapper)
* REST APIs
* Embedded Tomcat server

---

## 📁 Project Structure

```
.
├── backend
│   ├── .mvn
│   ├── mvnw
│   ├── mvnw.cmd
│   ├── pom.xml
│   ├── src
│   └── target
├── frontend
│   ├── .angular
│   ├── angular.json
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   ├── src
│   ├── tsconfig*.json
│   └── .vscode
└── Readme.md
```

---

## 🔧 Backend Overview (`backend/`)

* Spring Boot application using **Java 17**
* Built and run using **Maven Wrapper (`mvnw`)**
* Source code located in:

  ```
  backend/src/main/java
  ```
* Exposes REST APIs on:

  ```
  http://localhost:8080
  ```
* CORS is configured to allow requests from the frontend (`http://localhost:4200`)

### Run Backend

```bash
cd backend
./mvnw spring-boot:run
```

Backend test endpoint example:

```
GET http://localhost:8080/hello
```

---

## 🎨 Frontend Overview (`frontend/`)

* Angular application using **standalone components**
* Root component bootstrapped via `bootstrapApplication` in `main.ts`
* Uses Angular **HttpClient** to communicate with backend APIs
* Runs on:

  ```
  http://localhost:4200
  ```

### Run Frontend

```bash
cd frontend
ng serve
```

---

## 🔗 Frontend ↔ Backend Communication

* Frontend calls backend REST APIs using `HttpClient`
* Backend CORS configuration allows requests from `http://localhost:4200`
* Example flow:

  ```
  Angular → http://localhost:8080/hello → Spring Boot
  ```

---

## ⚙️ Prerequisites

Make sure the following are installed on your system:

* Java **17+**
* Node.js **18+ or 20+**
* npm
* Angular CLI
* Git

---

## 🚀 Getting Started (Quick Setup)

```bash
# Clone repository
git clone https://github.com/Trayz72/Angular-and-Springboot-Web-Application.git
cd InternTask

# Start backend
cd backend
./mvnw spring-boot:run

# Start frontend (new terminal)
cd frontend
ng serve
```

Open in browser:

* Frontend: `http://localhost:4200`
* Backend: `http://localhost:8080`

---

## 🧠 Development Notes

* Frontend and backend are **independent applications**
* Designed for easy extension:

  * Add database support (H2 / MySQL / PostgreSQL)
  * Add authentication (JWT)
  * Dockerize services
  * Production deployment with Nginx

---

## 📌 Future Enhancements

* Database integration
* Authentication & authorization
* API versioning
* Docker support
* CI/CD pipeline
* Production build and deployment

---

## 📄 License

This project is for learning and internal development purposes.

---

