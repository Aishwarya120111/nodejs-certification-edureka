const mongoDbClient = require("mongodb").MongoClient;

const url = "mongodb+srv://Aishwarya:Aashiqui2@cluster0.glzmb.mongodb.net/certificationdb?retryWrites=true&w=majority"

var dbClient;

exports.connect = () => {
    mongoDbClient.connect(url).then(
        (client)=>{
            dbClient = client;
            console.log("MongoDb has been connected");
        },
        (err) => {
            console.log(err)
            console.log("retrying");
            this.connect();
        }
    )
}

exports.getCollection = (name) =>{
    return dbClient.db("certificationproject").collection(name);
}