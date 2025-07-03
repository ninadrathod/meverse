FROM node:20-alpine

# Set a working directory inside the image
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g serve
COPY . .
ENV PORT=3000
EXPOSE $PORT
CMD ["serve","-s",".","-l","3000"]