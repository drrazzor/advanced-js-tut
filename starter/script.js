
//Inheritance in JS: Prototypes and Prototype Chains
//Everything is an object in JS  - (Every entity in js is referred to as Object)
//Javascript has constructors which can have instances which use the methods from the consructor

//Every Javascript object has a PROTOTYPE PROPERTY, which makes inheritance possible in JavaScript 
//The prototype property of an object is where we put methods and properties that we want OTHER OBJECTS TO INHERIT.
//The constructor's prototype is NOT the protype of the constructor itself, its the prototype of ALL instances that are created through it.
//When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on the object's protype. This continues until the metho is found: PROTOTYPE CHAIN



// Object Literal
var John = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};



//Function constructor
//convention for function constructor starts with UPPERCASE (Person)
//this variable points to NEW empty object and not global object.
var Person = function(name, yearOfBirth, job){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	}

//Applying Inheritance  - instead of adding method in the constructor, its added to the prototype function of the constructor.
Person.prototype.calcAge = function(){
	console.log(2016- this.yearOfBirth);
}

//adding properties
Person.prototype.lastName = "Smith";


//Creating new objects using constructor function - also known as instantiation. 
// new - creates an empty object, and then calls the function with given parameters

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1986, 'Designer');
var mark = new Person('Mark', 1948, 'Retrired');

john.calcAge();
jane.calcAge();
mark.calcAge();


console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);