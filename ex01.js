const students = [
    {
        id:1, fullname:"Le van minh", age:28,address:"nghean"
    },
    {
        id:2, fullname:"hoang quang thang", age:18,address:"nghean"

    },
    {
        id:3, fullname:"hoang quang tue", age:19,address:"nghean",

    }
]
const listStudent = students.filter((item) => {
    return item.age > 18;
})
console.log(listStudent);

const someResult = students.some(item => item.age > 19);
console.log(someResult);

const everyResult = students.every(item => item.age >= 19);
console.log(everyResult);
