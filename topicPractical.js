// 1. Using call():
// call() is used to invoke a function with a specific this value and arguments passed individually.

// Example:

const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + " from " + city + ", " + country;
    }
};

const person1 = {
    firstName: "John",
    lastName: "Doe"
};

// Using call() to invoke person.fullName with person1 as 'this' and arguments
console.log(person.fullName.call(person1, "New York", "USA"));
// Output: John Doe from New York, USA



// 2. Using apply():
// apply() is similar to call(), but arguments are passed as an array.

// Example:

const perso = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + " from " + city + ", " + country;
    }
};

const person2 = {
    firstName: "Jane",
    lastName: "Smith"
};

// Using apply() to invoke person.fullName with person2 as 'this' and arguments as an array
console.log(perso.fullName.apply(person2, ["London", "UK"]));
// Output: Jane Smith from London, UK

// 3. Using bind():
// bind() creates a new function where the this value is bound to the specified object. It doesn't immediately invoke the function, unlike call() and apply().

// Example:

const personn = {
    firstName: "Emily",
    lastName: "Clark",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const person3 = {
    firstName: "Sarah",
    lastName: "Johnson"
};

// Using bind() to create a new function with 'this' bound to person3
const getFullName = personn.fullName.bind(person3);

console.log(getFullName()); // Output: Sarah Johnson
