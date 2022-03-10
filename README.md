# nodejs-certification-edureka

## Docker Files are are created for all the application:
For Admin, You can find it in ./admin. Build the docker image using docker build command
For Customer facing, You can find it in ./customerfacing. Build the docker image using docker build command
For ngnix, You can find it in ./ngnix-proxy. Build the docker image using docker build command

## After creating the images create the docker compose file with the port numbers, container name,image path
## After pulling the docker repos (using docker pull <repo>) please run the following commands
### Go to the directory nginx-proxy
cd ./ngnix-proxy
#### run the docker-compose command
# docker-compose up

### Runtime Details
If you want to run without docker then, 
You can access the admin module by navigating to ./admin and run node index.js
You can access the cust-app module by navigating to ./customerfacing and run node index.js

Access the customer facing module from http://localhost:4000/
Access the admin module from http://localhost:4002/

the chatbox can be opened in a separate window through http://localhost:4001/

Sports Page data is fetched dynamically from newsapi server for the country INDIA

MongoDB connections are made to mongodb cloud server using my credentials, the details are in /config/mongodb.js in both ./admin and ./customerfacing folders.
