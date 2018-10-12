
//Inheritance in JS: Prototypes and Prototype Chains
//Everything is an object in JS  - (Every entity in js is referred to as Object)
//Javascript has constructors which can have instances which use the methods from the consructor

//Every Javascript object has a PROTOTYPE PROPERTY, which makes inheritance possible in JavaScript 
//The prototype property of an object is where we put methods and properties that we want OTHER OBJECTS TO INHERIT.
//The constructor's prototype is NOT the protype of the constructor itself, its the prototype of ALL instances that are created through it.
//When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on the object's protype. This continues until the metho is found: PROTOTYPE CHAIN

/*

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


*/



//Object.create Method
//First define an object that acts a protype. And then create a new object to use the prototype
//Object.create method inherits from the object we create, whereas Function constructor inherts from the constructor's prototype property.


var personProto = {
	calcAge: function(){
		console.log(2016-this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto,
{
	name: {value: 'Jane'},
	yearOfBirth: {value: 1969},
	job:{value: 'designer'	}
});





//Primitves vs Objects

//Primitive types - numbers, strings, boolean, null
//PRIMITIVES -- Var contatining primitives hold data inside the variable itself

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);



//Objects are everything else other than listed above
//OBJECTS -- var associated with objects, do not contatin the objects itself, but contains the reference to the object in memory.


var obj1 = {
	name:'John',
	age:26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1);
console.log(obj2);

 // >>In this case obj2 also changed when obj1 becayse, [obj2=obj1] does not copy the contents, but only copies the reference pointer. Hence when obj1 changed, obj2 also changed.