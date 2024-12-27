const arr1 = [1,2,3,4];
const arr2 = ["a", "b"];
console.log(arr1.concat(arr2, 100 ,[1,26]));

const arrCopy1 = arr1.concat();
const arrCopy2 = arr1.concat();

console.log(arr1 === arrCopy1);
console.log(arr2 === arrCopy2);

arrCopy1.push("AAA");
console.log(arr1);