FROM node:18

# Create working directory inside the container
WORKDIR /app

# Copy your server files into the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Start the server
CMD ["npm", "run", "dev"]