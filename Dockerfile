# Set the base image to Node.js 14.x
FROM node:14-alpine

# Create and set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Set the command to start the server
CMD [ "npm", "start" ]
