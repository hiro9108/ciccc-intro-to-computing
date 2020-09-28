// linearSearch

// const searchArr = [2, 34, 12, 53, 35];
// const searchNum = 35;

// let index = -1;

// const linearSearch = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === searchNum) {
//             return index = i;
//         }
//     }
// }

// console.log(searchArr[linearSearch(searchArr)], index);

// binarySearch

const searchArr = [2, 34, 12, 53, 35, 13];
const searchNum = 13;

let index = -1;
let left = 0;
let right = searchArr.length - 1;

searchArr.sort((a, b) => a - b);
console.log(searchArr)

while(left <= right) {
    middle = Math.floor((left + right) / 2);

    if(searchArr[middle] === searchNum) {
        index = middle;
        break;
    } else if (searchArr[middle] < searchNum) {
        left = middle + 1;
    } else {
        right = middle - 1;
    }
}

// const binarySearch = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === searchNum) {
//             return index = i;
//         }
//     }
// }

console.log(index)