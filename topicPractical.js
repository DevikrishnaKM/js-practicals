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


// 4)promise simple example

function checkEvenNumber(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(`${num} is an even number`);
        } else {
            reject(`${num} is an odd number`);
        }
    });
}

// Test the function
checkEvenNumber(4)
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

checkEvenNumber(7)
    .then((message) => console.log(message))
    .catch((error) => console.log(error));



//5) promise chaining

function waitOne(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("wait for 1 second"),1000)
    })
}
function waitTwo(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("wait for 5 second"),1000)
    })
}
function waitFive(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("wait for message"),5000)
    })
}
waitOne()
     .then((mes)=>{
         console.log(mes)
         return waitTwo()
         })
     .then((mes)=>{
         console.log(mes)
         return waitFive()
     })
     .then((mes)=>{
         console.log(mes)
     })


//6) promise.all

//Run multiple promises in parallel and wait for all of them to complete.
function One(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("first one"),1000)
    })
}
function Two(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("second"),3000)
    })
}
function Three(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("three"),5000)
    })
}
Promise.all([One(),Two(),Three()])
       .then((mes)=>console.log(mes))
       .catch((err)=>console.log(err))

//7) promise.race

//Use Promise.race to resolve as soon as the first promise completes.
function One(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("first one"),1000)
    })
}
function Two(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("second"),3000)
    })
}
function Three(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("three"),5000)
    })
}
Promise.race([One(),Two(),Three()])
       .then((mes)=>console.log(mes))
       .catch((err)=>console.log(err))




//8) Promise with finally
// A promise that logs a message regardless of whether the promise resolves or rejects.

function fetchData(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject('Fetching failed');
            } else {
                resolve('Data fetched successfully');
            }
        }, 1000);
    });
}

// Using finally to log a message regardless of success or failure
fetchData(false)
    .then((message) => console.log(message))
    .catch((error) => console.log(error))
    .finally(() => console.log('Fetch attempt complete'));

fetchData(true)
    .then((message) => console.log(message))
    .catch((error) => console.log(error))
    .finally(() => console.log('Fetch attempt complete'));
// Output:

// Data fetched successfully
// Fetch attempt complete
// Fetching failed
// Fetch attempt complete


//9)Handling Multiple Rejections
// Handle multiple rejections using Promise.allSettled where all promises either resolve or reject, but none are skipped.


function promiseA() {
    return new Promise((resolve) => setTimeout(() => resolve('Promise A resolved'), 1000));
}

function promiseB() {
    return new Promise((_, reject) => setTimeout(() => reject('Promise B rejected'), 1500));
}

function promiseC() {
    return new Promise((resolve) => setTimeout(() => resolve('Promise C resolved'), 2000));
}

// Using Promise.allSettled to get the results of all promises
Promise.allSettled([promiseA(), promiseB(), promiseC()])
    .then((results) => {
        results.forEach((result) => console.log(result));
    });
// Output:

// { status: 'fulfilled', value: 'Promise A resolved' }
// { status: 'rejected', reason: 'Promise B rejected' }
// { status: 'fulfilled', value: 'Promise C resolved' }

// 10)generator function

// using generator function print first 10 even numbers.

function* evenGenerator(){
    let num=0
    let count=0
    while(count<10){
        if(num%2===0){
            yield num
            count++
            console.log(`num=${num},count=${count}`)
        }
        
        num++
        console.log(`num=${num}`)
    }
}
let number=evenGenerator()
for(let num of number){
    console.log(num)
}

// Explanation:
// Generator Function: The function evenNumbersGenerator() is a generator that yields even numbers.
// yield keyword: It pauses the function and returns the value, then resumes from where it left off when called again.
// Tracking Even Numbers: It generates even numbers starting from 0 and continues until it has yielded 10 even numbers.
// Iterating: The for...of loop is used to iterate over the generator and print each even number.