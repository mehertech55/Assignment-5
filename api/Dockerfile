FROM node:12
# Create app directory
WORKDIR C:\Users\kashy\Documents\wamp64\www\CS612\Assignment5\api

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]