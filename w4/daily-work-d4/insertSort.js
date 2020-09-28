let nums = [5, 7, 9, 4, 1, 8, 25, 3];
let otherNums = [46, 2, 34, 90, 56, 27];
let finalTest = [5, 7, 98, 36, 47, 45, 5, 2];


const insertSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {

        let temp = arr[i];
        
        // let j;
        for (var j = i-1; j >= 0; j--) {
            if (arr[j] > temp) {
                arr[j+1] = arr[j];
            } else {
                break;
            }
        };
        arr[j+1] = temp;
    };
    return arr;
};

console.log(insertSort(nums));
console.log(insertSort(otherNums));
console.log(insertSort(finalTest));