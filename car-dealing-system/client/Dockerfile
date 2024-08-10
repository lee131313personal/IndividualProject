# Use the official Node.js image as a base
FROM node:16

# Create and set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vue.js application
RUN npm run build

# Install serve globally to serve the built application
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 8080

# Start the application using serve
CMD ["serve", "-s", "dist"]

