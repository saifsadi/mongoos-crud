//jshint esversion:6
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});

 const fruitSchema = new mongoose.Schema (
 {
     name : String,
     ratting : [
       {
         type : Number,
         min : 1,
         max : 10
       }
     ],
     review : String
   }
 );

 const Fruit = mongoose.model('Fruit', fruitSchema);

 const fruit = new Fruit (
   {
     name : 'Apple',
     ratting : 8,
     review : "Great fruit"
   }
);

const banana = new Fruit(
  {
    name : 'Banana',
    ratting : 9,
    review : "Healthy fruit"
  }
);

const mango = new Fruit(
  {
    name : 'Mango',
    ratting : 10,
    review : "yummy...!"
  }
);

// Fruit.insertMany([banana, mango], function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Added fruits");
//   }
// });

// const peopleScheme = new mongoose.Schema(
//   {
//     name : String,
//     age : Number
//   }
// );
//
// const People = mongoose.model("People", peopleScheme);
//
// const people = new People(
//   {
//     name : "Saif Ur Rehman",
//     age : 24
//   }
// );
//
//
// const carSchema = new mongoose.Schema(
//   {
//     make : String,
//     model : String,
//     year: Number
//   }
// );
//
// const Car = mongoose.model("Car", carSchema);
//
// const car = new Car(
//   {
//     make : "Honda",
//     model : "Civic",
//     year : 2019
//   }
// );

const studentSchema = new mongoose.Schema(
  {
    name : {
      type : String,
      required : [true, "Please Enter your name"]
    },
    class : String,
    age : {
      type : Number,
      min : 18,
      max : 25
    },
    address : String,
    favFruit : fruitSchema
  }
);

const Student = mongoose.model("Student", studentSchema);

const student = new Student (
  {
    name : "Awais",
    class : "Pre 9th",
    age : 19,
    address : "Rawalpindi",
    favFruit : mango
  }
);

//fruit.save();
//people.save();
//car.save();
//student.save();

Student.updateOne({name : "Saif Ur Rehman"}, {favFruit : banana}, function(err){
  if(err){
    console.log(err);
  } else {
    console.log("successfully updated Person");
  }
});

// Student.updateOne({_id: '5caded568c870d0e9227ef7b'}, {name : "John Doe"}, function(err){
//   if(err){
//     console.log(err);
//   }
// });

// delete method

// Student.deleteOne({_id:'5caded568c870d0e9227ef7b'}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("successfully deleted");
//   }
// });

// const saif = new Student(
//   {
//     name : "Saif Ur Rehman",
//     class : "Masters",
//     age : 24,
//     address : "Rawalpindi"
//   }
// );
//
// const sami = new Student(
//   {
//     name : "Sami Ur Rehman",
//     class : "Second Year",
//     age : 22,
//     address : "Lahore"
//   }
// );
//
// const khalil = new Student(
//   {
//     name : "Khalil Ur Rehman",
//     class : "Masters",
//     age : 24,
//     address : "Peshawer"
//   }
// );

// Student.insertMany([saif, sami, khalil], function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("successfully Added to Database");
//   }
// });


// Student.find(function(err, students){
//   if(err){
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     students.forEach(function(student) {
//       console.log(student.name);
//     }
//   );
//   }
// });

// //Get Data from Database
//
// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Find some documents
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// };
