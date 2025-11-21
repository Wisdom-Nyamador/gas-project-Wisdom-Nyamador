FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json from build context
COPY package*.json ./
RUN npm ci --only=production

# Copy the rest of the app
COPY . .

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "src/index.js"]
