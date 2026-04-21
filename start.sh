#!/bin/bash

# Navigate to the directory where the script is located
cd "$(dirname "$0")"

echo "=========================================="
echo " Starting Thrall Project Services"
echo "=========================================="

# Start the Spring Boot Backend
echo "--> Starting Spring Boot Backend..."
cd backend
# Make sure mvnw is executable
chmod +x mvnw
./mvnw spring-boot:run &
BACKEND_PID=$!
cd ..

# Start the Vite React Frontend
echo "--> Starting React Frontend..."
cd frontend
# Install dependencies if node_modules does not exist
if [ ! -d "node_modules" ]; then
  echo "--> node_modules not found. Installing frontend dependencies..."
  npm install
fi
npm run dev &
FRONTEND_PID=$!
cd ..

echo "=========================================="
echo " Services are starting up!"
echo " Backend PID: $BACKEND_PID"
echo " Frontend PID: $FRONTEND_PID"
echo " Press [CTRL+C] to stop both services."
echo "=========================================="

# Trap SIGINT (Ctrl+C) and SIGTERM to gracefully kill both processes
trap "echo -e '\nStopping services...'; kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit 0" SIGINT SIGTERM

# Wait indefinitely, keeping the script running until interrupted
wait
