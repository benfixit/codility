//Problem: You are given an integer n. Count the total of 1 + 2 +...+n.
function sumOfNumbers(numberOfElements){
    let sum = 0;
    for(let i = 1; i <= numberOfElements; ++i){
        sum += i
    }
    return sum;
}

function sumOfNumbersImproved(numberOfElements){
    const sum = (numberOfElements * (numberOfElements + 1))/2
    return sum;
}

const start = new Date().getTime()
sumOfNumbers(10000000);
const end = new Date().getTime()
const timeSpent = end - start;
console.log(`${timeSpent} ms`)

// console.log(sumOfNumbersImproved(100));