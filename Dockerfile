FROM node:18-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache netcat-openbsd

COPY package*.json ./
COPY knexfile.js ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["sh", "-c", "while ! nc -z db 5432; do sleep 2; done && npm run migrate && npm run seed && npm run dev"]