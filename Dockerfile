
FROM node:12-buster-slim
RUN apt-get update && apt-get install -y libaio1 wget unzip tree





WORKDIR /app

COPY . .


RUN npm install

EXPOSE 5000

ENV MONGO_URI=''
ENV JWT_SECRET=''



CMD node index.js