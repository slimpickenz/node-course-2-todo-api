//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  db.collection('Users').deleteMany({name: "Mike"}).then((result) => {
    console.log(result);
  });

  // deleteOne
  // db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5987cc01ae2892211c6ecf01')
  }).then((result) => {
    console.log(result);
  })
  //db.close();
});
