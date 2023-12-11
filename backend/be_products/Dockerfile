#Build deps
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production


#Build dist
FROM deps AS build
WORKDIR /app
COPY ./ ./
RUN npm ci && npm run build


#Build app
FROM node:20-alpine 
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./src

EXPOSE 3001

CMD ["node", "./src/main.js"]
