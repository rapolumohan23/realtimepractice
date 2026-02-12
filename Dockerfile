# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app 
COPY package*.json ./
RUN npm install

# Copy source file
COPY app.js .
EXPOSE 6000

# Run the script
CMD ["node", "app.js"]

