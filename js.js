// 1)ispalindrome without built in

function palindrome(array){
    let len=array.length
    for(let i=0;i<len/2;i++){
        if(array[i]!==array[len-1-i])return false
    }
    return true
}
console.log(palindrome("racecar")); // true
console.log(palindrome("hello"));   // false

// 2)snake case to pascal
function snakeToPascal(str){
    let result=""
    let capitalize=true
    
    for(let i=0;i<str.length;i++){
        if(str[i]==="_"){
            capitalize=true
        }else{
            if(capitalize){
                result+=str[i].toUpperCase()
                capitalize=false
            }else{
                result+=str[i]
            }
        }
    }
   return result
}
console.log(snakeToPascal('hello_world_example')); // HelloWorldExample
console.log(snakeToPascal('convert_this_string')); // ConvertThisString

// 3)flip negative from a mixed array

function flipNegative(arr){
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]===Number && arr[i]<0){
            arr[i]=-arr[i]
        }
    }
    return arr
}
let mixedArray = [12, '-3', -5, 'hello', 42, -100, '100'];
console.log(flipNegative(mixedArray));

// 4)counter


let seconds=10

function tick() {
        if (seconds > 0) {
            console.log(seconds);
            seconds--;
            setTimeout(tick, 1000); // Call `tick` every 1 second
        } else {
            console.log("Time's up!");
        }
    }
    tick();