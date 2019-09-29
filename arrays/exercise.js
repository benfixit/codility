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

console.log(reverseArray([2, 45, 12, 10, 1, 100]))
console.log(reverseArrayWithoutReverseHelper([2, 45, 12, 10, 1, 100]))
console.log(reverseArrayWithoutAnyHelper([2, 45, 12, 10, 1, 100]))