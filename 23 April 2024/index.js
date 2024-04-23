const array1 = [13,45,100,23,50,244];
// ================= Haioder F()-- Arrange in Assending Oder=====================
// array1.sort(function(a,b){
//     return a-b;
// });
// console.log(array1);
//   // ================= Haioder F()-- Arrange in Dessending Oder=================
// array1.sort(function(a,b){
//     return b-a;
// });
// console.log(array1);
//  // ================= Arrange in Reverse Oder =================
//  array1.reverse();
// console.log(array1);


// =================== Spret Oprater (...) ====================
// Array/ ko Dusre Array Me copy krne ke liye.
const array2 = [13,45,100,23,50,244];
const array3 = [33,44,55,66,77,88];
const newarray = [...array2,...array3];
console.log(newarray);

//Object ko Dusre Array Me copy krne ke liye.==========

const person1= {
    name: "Johan",
    age: 34,
    city: "Bhopal",
};
const person2 = {
    lname: "Rahul",
    athor: 23,
    city: "Indoor",
};
const newPerson= {...person1,...person2};
console.log(newPerson);// Same type Ko Yah nhi Leta H Overlap Kr Deta H EXP- name-name esme se ak hi name Lega
 //========= A New Way Of ====
// const arr = [1,2,3];
// const arr2 = [...arr,4,5,6,7];
// console.log(arr2);

//=====================================================
const arr1 = [1,2,3];
const arr2 = arr1;    //  [...arr3];

arr1.push(5);
console.log(arr1);
console.log(arr2);



