/*
Operate Array
*/

// Reverse from left to right

// const sampleArr = [32, 42, 24, 53, 3, 134, 45]

// const reverseArr = (arr, left, right) => {
//     for (let i = left; i <= Math.floor( (left + right) / 2 ); i++) { 
//         let j = right - (i - left)
//         //Swap
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr;
// }

// console.log(reverseArr(sampleArr, 4, 5))


// Reverse All

// const reverseArr = (arr) => {
//     for (let i = 0; i < Math.floor(arr.length / 2); i++) { 
//         let j = (arr.length - 1) - i
//         //Swap
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr;
// }

// console.log(reverseArr(sampleArr))



// ----------------------------------------------------------------

// let nums = [5, 7, 9, 4, 1, 8, 25, 3];
// let otherNums = [46, 2, 34, 90, 56, 27];
// let finalTest = [5, 7, 98, 36, 47, 45, 5, 2];


// bubble sort - 01 Dsc

// const bubbleSort = (arr) => {
//     for (let i = arr.length - 1; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (arr[j] > arr[j+1]) {
//                 let escape = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = escape;
//             }
//         }
//     }
//     return arr;
// };

// console.log(bubbleSort(nums));
// console.log(bubbleSort(otherNums));
// console.log(bubbleSort(finalTest));


// selection sort

// const selectionSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         // min value
//         let minValue = arr[i];
//         // save min index
//         let minIndex = i;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (minValue > arr[j]) {
//                 minValue = arr[j];
//                 minIndex = j; 
//             }
//         }
//         // Swap
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
//     return arr;
// }

// console.log(selectionSort(nums));
// console.log(selectionSort(otherNums));
// console.log(selectionSort(finalTest));




// ------------------------------------------------------------------------




/*
// bubble sort - 02 Asc

// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length-1; i++) {
//         for (let j = arr.length - 1; j > i; j--) {
//             if (arr[j] < arr[j-1]) {
//                 let escape = arr[j-1];
//                 arr[j-1] = arr[j];
//                 arr[j] = escape;
//             }
//         }
//     }
//     return arr;
// };
*/
