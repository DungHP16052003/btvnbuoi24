/**ES6
 * destructuring 
 * rest 
 * spread
 * Rest:
 * 
 * 
 */
const arr1 = [1,2,3,4,"f8"];
const arr2 = [6,7,8,9];
const [fisrt, second, ...rest] = arr1;
console.log(fisrt);

console.log(rest);

const arr = [...arr1,"Hoang", ...arr2];
console.log(arr);
