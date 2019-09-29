// Problem: Given array A consisting of N integers, return the reversed array.

function reverseArray(arr){
    return arr.reverse();
}

function reverseArrayWithoutReverseHelper(arr){
    const arrLength = arr.length;
    const newArr = [];
    for(let i = arrLength - 1; i >= 0; --i){
        newArr.push(arr[i])
    }
    return newArr
}

function reverseArrayWithoutAnyHelper(arr){
    const arrLength = arr.length;
    const newArr = [];
    let j = 0;
    for(let i = arrLength - 1; i >= 0; --i){
        newArr[j] = arr[i]
        j++;
    }
    return newArr
}

function swap(arr, firstIndex, secondIndex){
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

function reverseArrayImproved(arr){
    const midPoint = Math.floor(arr.length/2);
    const bar = midPoint - 1;
    const arrLength = arr.length
    for(let i = 0; i <= bar ; ++i){
        swap(arr, i, arrLength - 1 - i)
    }
    return arr;
}

function generateArray(numberOfElements){
    const arr = [];
    for(let i = 0; i < numberOfElements; ++i){
        arr.push(Math.floor(Math.random() * 101))
    }
    return arr;
}

function displayArray(arr){
    let str = "";
    const arrLength = arr.length;
    for(let i = 0; i < arrLength; ++i){
        if(i > 0 && i % 10 === 0){
            str += arr[i] + '\n';
        } else{
            str += arr[i] + ' ';
        }
    }
    return str;
}

const arr = generateArray(10000000);
console.log(':::Generated Array:::')
displayArray(arr)

const start = new Date().getTime()
console.log('\n\n!!!Starting Array Reversal!!!')

console.log('\n\n:::Reversed Array:::')
displayArray(reverseArrayImproved(arr))
const end = new Date().getTime()
const timeSpent = end - start;
console.log(`${timeSpent} ms`)
console.log(reverseArray([2, 45, 12, 10, 1, 100]))
console.log(reverseArrayWithoutReverseHelper([2, 45, 12, 10, 1, 100]))
console.log(reverseArrayWithoutAnyHelper([2, 45, 12, 10, 1, 100]))