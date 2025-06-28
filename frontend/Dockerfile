# Use a lightweight Nginx image as the base
FROM nginx:alpine

# Copy your static frontend files from the 'public' directory
# (relative to the Dockerfile's context, which is 'frontend/')
# into Nginx's default web serving directory.
COPY public/ /usr/share/nginx/html/

# Expose port 80, which is the default HTTP port Nginx listens on.
# This is the container's internal port.
EXPOSE 80

# Command to run Nginx in the foreground so Docker keeps the container running.
CMD ["nginx", "-g", "daemon off;"]