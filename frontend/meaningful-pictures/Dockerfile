# Step 1 - define app env
FROM node:17-alpine

# Step 2 - create directory in the container
WORKDIR /app

# Step 3 - copy package to container
COPY package*.json ./

# Step 4 - install dependencies
RUN npm install


# Step 5 - copy all files
COPY . ./app

# Step 6 - define enviroment
ENV PORT=4002

# Step 7 - expose app port
EXPOSE 4002

# Step 8 - run app
CMD [ "npm", "start" ]