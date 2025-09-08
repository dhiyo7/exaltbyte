# Use an official Node runtime as the base image
FROM node:20-alpine3.18

# Set the working directory in the container
WORKDIR /src

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm run build

# Install a simple server to serve static files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 4000

RUN apk add xsel
# Command to run the application
CMD ["serve", "--no-clipboard", "-s", "dist", "-l", "4000"]
