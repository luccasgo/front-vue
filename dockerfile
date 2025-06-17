# Dockerfile - Front (Vue.js)
FROM node:20-alpine AS build-stage

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]
