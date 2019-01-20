const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c443e326af5d204038f3b30';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');    
// }

// Todo.find({                         //HERE WE USED todos THAT WILL PRINT ALL DATA IN ARRAY FORMAT 
//     _id: id                         //IF IT WILL NOT FIND ANY DATA IT WILL GOING TO PRINT EMPTY ARRAY
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({                      //HERE WE USED todo THAT WILL PRINT SINGLE DATA 
//     _id: id                         //IF IT WILL NOT FIND ANY DATA IT WILL GOING TO RETURN NULL
// }).then((todo) => {
//     console.log('Todo', todo);    
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found');        
//     }
//     console.log('Todo BY ID', todo);    
// }).catch((e) => console.log(e));

User.findById('5c441717740330dc143f1b9e').then((user) => {
    if(!user) {
        return console.log('Unable to find User');        
    }
    console.log(JSON.stringify(user, undefined, 2));    
}).catch((e) => console.log(e));
