# Define project paths
FRONTEND_DIR := frontend

# Target to build and start the Docker Compose application
build: 
	@echo "Building and starting Docker Compose application..."
	docker-compose up -d --build
	docker exec -d -it frontend npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
	@echo "Docker Compose application is running."

up:
	@echo "Building and starting Docker Compose application..."
	docker-compose up -d
	docker exec -d -it frontend npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
	@echo "Docker Compose application is running."

# Optional target to stop and remove containers
down:
	@echo "Stopping and removing Docker Compose containers..."
	docker-compose down
	@echo "Docker Compose containers stopped and removed."

# Optional target to rebuild the Docker images
rebuild: down build

destroy_project:
	@echo "Destroying all containers, images, volumes, and networks..."
	docker-compose down --volumes --rmi all # Stop and remove containers, volumes, and images
	docker system prune -a --volumes -f # Aggressively prune everything
	@echo "All Docker resources related to project destroyed."
	@echo "Deleting residual files from host directories..."
	rm -rf $(FRONTEND_DIR)/src/output.css $(FRONTEND_DIR)/node_modules/ $(FRONTEND_DIR)/package-lock.json
	@echo "Clean-up complete."

.PHONY: build up down rebuild destroy_projectdock