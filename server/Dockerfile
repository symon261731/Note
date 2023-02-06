FROM node:16.10-alpine

WORKDIR /app/

COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node ./ ./

USER node:

CMD [ "npm", "start" ]
