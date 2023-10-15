FROM node:18
WORKDIR /usr/app
COPY ./ /usr/app

COPY package*.json /
RUN npm install

COPY . .
EXPOSE 8080
CMD ["node", "restapi.js"]

