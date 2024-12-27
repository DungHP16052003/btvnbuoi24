
// Input:
const fruits = ["apple", "banana", "kiwi", "kiwi", "banana", "orange", "apple", "kiwi"];

function removeDuplicate(arr) {
   return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Output:

const result = removeDuplicate(fruits);

console.log(result); // ["apple", "banana", "kiwi", "orange"]
// bai 2
function fibonacci(n) {
   if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
       console.log("Số phần tử không hợp lệ");
       return;
   }

   let fib = [0, 1];

   for (let i = 2; i < n; i++) {
       fib.push(fib[i - 1] + fib[i - 2]);
   }
   console.log(fib.slice(0, n).join(" "));
}

fibonacci(5);   
fibonacci(10);  
fibonacci(0);    
fibonacci(-5);  
fibonacci("abc"); 
fibonacci(1);    
