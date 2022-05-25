FROM node:11

ENV HOME=/src/inali-web

WORKDIR $HOME

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["node", "__sapper__/build/"]