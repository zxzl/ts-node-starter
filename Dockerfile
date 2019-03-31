FROM node:11

WORKDIR /usr/app
COPY package.json ./
RUN yarn

EXPOSE 9229
EXPOSE 3000
CMD ["yarn", "watch"]
