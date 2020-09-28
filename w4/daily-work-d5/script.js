// // find the greatest common divisor of the two numbers given

// const gcd = function(a, b) {
//     let dividedNum = a;
//     let divNum = b;
//
//     if (dividedNum < divNum) {
//         let temp = dividedNum;
//         dividedNum = divNum;
//         divNum = temp;
//     }
//
//     let remainder = dividedNum % divNum;
//
//     while (!divNum % remainder === 0) {
//         dividedNum = divNum;
//         divNum = remainder;
//         remainder = dividedNum % divNum;
//     }
//
//     return divNum;
// 
// }
//
// console.log(gcd(722,171))












// find the lowest common multiple of two given numbers

// const lcm = function(a, b) {
//     for (let i = 1; i <= b; i++) {
//         for (let j = 1; j <= a; j++) {
//             if (a * i === b * j) {
//                 return a * i;
//             }
//         }
//     }
// }

// console.log(lcm(11,15))




// check if a given number is prime. return true or false.

// const isPrime = function(num) {
//     if (num <= 1) {
//         return false;
//     };
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             count++;
//         }
//     };
//     return count === 2 ? true : false;
// };

// console.log(isPrime(997));





// generate a list of prime numbers from 2 up to a value, n
// you can use the Sieve of Eratosthenes method to do this.

// const primeGenerator = function(n) {
//     if (n <= 1) {
//         return 'Please put more than +1 integer';
//     };
//     const primeArr = [];
//     for (let i = 2; i <= n; i++) {
//         let count = 0;
//         for (let j = 1; j <= i; j++) {
//             if (i % j === 0) {
//                 count++;
//             }
//             if (count === 2 && i === j) {
//                 primeArr.push(i);
//             }
//         }
//     };
//     return primeArr;
// };

// console.log(primeGenerator(3));
