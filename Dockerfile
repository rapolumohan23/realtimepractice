# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app 

# Copy source file
COPY app.js .
EXPOSE 7000

# Run the script
CMD ["node", "app.js"]

