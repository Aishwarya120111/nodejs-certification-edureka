#Form Base Image
FROM node:16

#Create working directory
WORKDIR /src/cust

#Copy package json files in working directory
COPY package*.json ./

#RUN NPM INIT/Install dependencies
RUN npm install

#Copy SourceFiles.
COPY . .

#Expose the defined port
EXPOSE 4000
EXPOSE 4001

#Start the Program
CMD ["node", "index.js"]