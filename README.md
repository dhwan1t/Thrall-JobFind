# Thrall

A basic full-stack job portal project with:
- Spring Boot backend
- React + Vite frontend

## Project Structure

- `backend/` - Java Spring Boot API
- `frontend/` - React application
- `start.sh` - helper script (if configured)

## Prerequisites

- Java 17+
- Maven
- Node.js 18+
- npm

## Run Backend

```bash
cd backend
./mvnw spring-boot:run
```

Backend default URL:
- `http://localhost:8080`

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend default URL:
- `http://localhost:5173`

## Notes

- Make sure backend is running before testing frontend API calls.
- Update API base URL in `frontend/src/services/api.js` if needed.
