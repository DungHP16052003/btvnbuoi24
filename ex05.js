/**
 * sort()
 * 
 * 
 */
// const arr1 = [1,6,,10,5,100,4,2]
// console.log(arr1.sort());
// const arr2 = ["hoang", "dung", "minh"];
// console.log(arr2.sort());

// console.log(arr1.sort((a,b) => a - b));

const students = [
    { id: 1, fullname: "Le Van Minh", age: 28, address: "NgheAn" },
    { id: 2, fullname: "Hoang Quang Thang", age: 18, address: "VinhPhuc" },
    { id: 6, fullname: "Nguyen Van Anh Cong", age: 22, address: "HaNoi" },
    { id: 3, fullname: "Kieu Minh Tue", age: 21, address: "VinhPhuc" },
    { id: 4, fullname: "Nguyen Van Cong", age: 18, address: "HaNoi" },
    { id: 5, fullname: "Nguyen Minh Cong", age: 18, address: "HaNoi" },
    ];
const listStudent = students.sort((a,b) => a.age - b.age )
console.log(listStudent);

function sortbyName(data){
    for(let i =0; i < data.length; i++){
        const arrFullName = data[i].fullname.split(" ");
        console.log(arrFullName);
     console.log(arrFullName.splice(-1, 1))

    
  const arrFullName1 =  arrFullName.sort((a,b)=> a.fullname > b.fullname);
   console.log(arrFullName1);
    }
    
}
sortbyName(students);