# Use the official Node.js image as a base
FROM node:16

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app will run on
EXPOSE 5000

# Define the command to run the application
CMD ["node", "server.js"]

