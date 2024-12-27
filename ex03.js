const arr = [1,2,3,4,[6,7],[6,7,8]];
console.log(arr.flat(Infinity));

console.log(arr.flat(-10));
console.log(arr);

console.log(arr === arr.flat(0));
/**
 * flat(): lam phang mang
 * -khong thau doi mang bd
 * depth
 * -default: khi thong truyen tham so no se sau mot cap
 * khi lm phang toan bo dung value : infinity
 * 
 */