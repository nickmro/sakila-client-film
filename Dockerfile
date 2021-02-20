FROM node:14.15.5 AS build

COPY . .
RUN npm ci && npm run build && npm cache clean --force && npm prune --production

FROM node:14.15.5-alpine

ENV NODE_ENV=production

COPY --from=build /.next ./.next
COPY --from=build /node_modules ./node_modules
COPY --from=build /public ./public
COPY --from=build /next.config.js ./next.config.js
COPY --from=build /package.json ./package.json

RUN npm install next

EXPOSE 3000
CMD [ "npm", "run", "start"]
