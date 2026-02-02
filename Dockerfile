# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy source file
COPY hello.js .

# Run the script
CMD ["node", "hello.js"]

