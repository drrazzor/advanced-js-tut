
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



 //Functions are also objects. Function is an instance of Object type.
 //Functions can accept other functions are parameters

var years = [1990,1965,1937,2005,1998];

//Creating Generic function
//passing in array and a function into the function-calcAge
function arrayCalc(arr, fn){
	var arrRes = [];
	for(var i=0;i<arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}


//callback function fn - to push new 
//el - years
function calculateAge(el){
	return 2016 - el;
}

//Creating callback function for Generic function
// el - ages
function isFullAge(el){
	return el>=18;
}

////Creating callback function for Generic function
//Calculating max heart rate  >> el - ages
function maxHeartRate(el){
	if(el>=18 && el<81){
		return Math.round(206.9 - (0.67*el));	
	}else{
		return -1;
	}	
}



var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var maxHR = arrayCalc(ages, maxHeartRate);
console.log(maxHR);





//Functions returning other functions
//Functions are always FIRSTCLASS FUNCTIONS in JS. Because functions are also objects. It may also be called first class objects.


function interviewQuestion(job){
	if(job=='designer'){
		return function(name){    //returning anonymus function
			console.log(name + ' Can you explain more about UX design?');
		}	
	}else if(job=='teacher'){
		return function(name){
			console.log(name + ', What courses do you teach?');
		}
	}else{
		return function(name){
			console.log(name +", What do you do?");
		}
	}
}


//Two ways to call the above func

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Mark');

//OR

//Since JS Evaluates from LEFT to RIGHT,  first it will evaluate interviewQuestion("teacher") AND THEN  [interviewQuestion("teacher")] ('Peter')
interviewQuestion("teacher")('Mark');
interviewQuestion()("Tim");			





//Objects and functions
//Immediately Invoke Function Expressions (IIFE)

//Normal function declaration
function add(){
	var num = 5;
	console.log(num>=5);
}
add();


//IIFE
(function (){
	var num = 5;
	console.log(num>=5);
})();



//Add parameters to IIFE function
(function (p){
	var num = 5-p;
	console.log(num>=5);
})(3);


*/




//CLOSURES
//The inner function has always accessed to the variables and paramters of its outer function, even after the function has returned

function retirement(retAge){
		var a = ' years left until retirment.';    //Function below can access this variable. its the concept of closures
		return	function(yearOfBirth){				//Retirement function is returning.
			var age = 2016 - yearOfBirth;
			console.log((retAge-age)+ a);	
		}

}

//retAge - set based on the country by user
var retirementUS = retirement(66)(1990);  //US retirement age is 66 and year of birth is 1990
var retirementCAN = retirement(65)(1990);
var retirementICELAND = retirement(67)(1990);				