// var mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/ToDoApplication');

// var Todo = mongoose.model('Todo', {
//     text: {
//         type : String
//     },
//     completed: {
//         type: Boolean
//     },
//     completedAt: {
//         type: Number
//     }
// });


// var Todo = mongoose.model('Todo', {
//     text: {
//         type : String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// var otherTodo = new Todo({
//     text: '  Edit this code      '
// });

// otherTodo.save().then((doc) => {
//     // console.log('Saved ToDo: ', doc);
//     console.log(JSON.stringify(doc,undefined, 2));    
// }, (e) => {
//     console.log('Unable to save todo', e);    
// });

// var User = mongoose.model('User', {
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 1
//     }s
// });

// var user = new User({
//     email: 'hardik@simform.com  '
// });

// user.save().then((doc) => {
//     console.log('User saved', doc);    
// }, (e) => {
//     console.log('Unable to save user', e);    
// });

var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
    
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    // res.send(req.params);

    var id = req.params.id;

    if(!ObjectID.isValid(id)){
       return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();       
        }

        res.send({todo});
    }).catch((e) => {
        res.status(404).send();
    });
    

});

app.listen(3000, () => {
    console.log('Sarted on port 3000');    
});

module.exports = {
    app
};