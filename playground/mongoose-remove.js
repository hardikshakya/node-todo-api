const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result); 
// });

// Todo.findOneAndRemove({_id: '5c446b70f8c218239f2a477a'}).then((todo) => {
//     console.log(todo);    
// });

// Todo.findByIdAndRemove('5c446b70f8c218239f2a477a').then((todo) => {
//     console.log(todo);    
// });