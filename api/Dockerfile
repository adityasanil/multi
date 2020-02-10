FROM node:alpine

WORKDIR /usr/app

ARG PORT
ENV PORT ${PORT}

COPY ./package*.json ./
RUN npm i 
COPY ./ ./ 

CMD ["npm", "run", "start"]