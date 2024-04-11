# Stage 1: Build the React app
FROM node:18-alpine as build
WORKDIR /telegram-miniapp
# Copy package.json files and install dependencies
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Use Nginx for serving the React app
FROM nginx:1.25
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /telegram-miniapp/build /usr/share/nginx/html

# Expose port 443
EXPOSE 443

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
