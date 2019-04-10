//jshint esversion:6
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});

// const fruitSchema = new mongoose.Schema (
//   {
//     name : String,
//     ratting : Number,
//     review : String
//   }
// );
//
// const Fruit = mongoose.model('Fruit', fruitSchema);
//
// const fruit = new Fruit (
//   {
//     name : 'Apple',
//     ratting : 8,
//     review : "Great fruit"
//   }
// );

const peopleScheme = new mongoose.Schema(
  {
    name : String,
    age : Number
  }
);

const People = mongoose.model("People", peopleScheme);

const people = new People(
  {
    name : "Saif Ur Rehman",
    age : 24
  }
);


const carSchema = new mongoose.Schema(
  {
    make : String,
    model : String,
    year: Number
  }
);

const Car = mongoose.model("Car", carSchema);

const car = new Car(
  {
    make : "Honda",
    model : "Civic",
    year : 2019
  }
);

const studentSchema = new mongoose.Schema(
  {
    name : String,
    class : String,
    age : Number,
    address : String
  }
);

const Student = mongoose.model("Student", studentSchema);

const student = new Student (
  {
    name : "Kashif Islam Ahmed",
    class : "First Year - 2019",
    age : 22,
    address : "Barafkhana Rawalpindi"
  }
);

//fruit.save();
//people.save();
//car.save();
//student.save();


const saif = new Student(
  {
    name : "Saif Ur Rehman",
    class : "Masters",
    age : 24,
    address : "Rawalpindi"
  }
);

const sami = new Student(
  {
    name : "Sami Ur Rehman",
    class : "Second Year",
    age : 22,
    address : "Lahore"
  }
);

const khalil = new Student(
  {
    name : "Khalil Ur Rehman",
    class : "Masters",
    age : 24,
    address : "Peshawer"
  }
);

// Student.insertMany([saif, sami, khalil], function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("successfully Added to Database");
//   }
// });


Student.find(function(err, students){
  if(err){
    console.log(err);
  } else {
    mongoose.connection.close();
    students.forEach(function(student) {
      console.log(student.name);
    }
  );
  }
});

//Get Data from Database

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  });
};
