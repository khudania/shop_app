const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const mongoConnect = (callback) =>{
    MongoClient.connect('mongodb+srv://hkhudania:lOOIdwEBScJVji8t@cluster0-8qn4t.mongodb.net/test?retryWrites=true&w=majority')
    .then(
        client =>{
            console.log('Connected')
            callback(client)
        }
    )
    .catch(err => console.log(err))
}

module.exports = mongoConnect

