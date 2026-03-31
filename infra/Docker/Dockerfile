# --- build stage ---
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- runtime stage ---
FROM nginx:1.25-alpine

# удалить дефолтный конфиг
RUN rm /etc/nginx/conf.d/default.conf

# кастомный nginx
COPY infra/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Vite build
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
