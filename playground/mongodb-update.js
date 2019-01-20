// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect MongoDB server :(');        
    }
    console.log('Connected to MongoDB server :)');

    // findOneAndUpdate

    // db.collection('Todos').findOneAndUpdate({
    //     text: "Eat lunch"
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);        
    // });

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('5c43ff15a3122529344f737f')
    // }, {
    //     $set: {
    //         name: 'Hardik Pandya',
    //         location: 'Baroda'
    //     }, $inc: {
    //         age: 1
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);        
    // });

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('123')
    // }, {
    //     $set: {
    //         name: 'Hardik Pandya'
    //     },
    //     $inc: {
    //         age: 7
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);        
    // });
    // db.close();
});
