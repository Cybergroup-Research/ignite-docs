FROM node:lts

WORKDIR /app/src

EXPOSE 3000 35729
COPY . /app/src
RUN npm install

CMD ["npm", "start"]
