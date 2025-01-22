// let str="hii hello"
// let op=str.includes("h");
// console.log(op)

//arr methods
// let arr=[1,2,3,4]
// let op=arr.toString()  //returns the string but not modifying the array
// console.log(op,arr)

// let arr=[1,2,3,4]
// let op=arr.at(3)
// console.log(op)

//find method will return an element which passes condition,
//let arr = ["hiii", "hello", "javascript", "python", "database", "react"];
// let op=arr.find(function(value,index,array){
//     return value.length>3
// })
// let op = arr.find((value, index, array) => {
//   return value.length > 3;
// });
//let op=arr.find(x=>x.length>4)
// console.log(op);

// let arr1 = [12, 48, 99, 180];
// op = arr1.find(function (value, index, arr) {
//   return value > 50;
// });
// console.log(op);

// let arr=[2,4,8,9]
// //let op=arr.findLast(function(value,index,arr){return value>5})
// let op=arr.findLastIndex(function(value,index,arr){return value>5})
// console.log(op)

// let arr=[1,2,3,4,5,6]
// let op=arr.map(function(x,y,z){
// // return x
// return y
// return z
// })
// console.log(op)

// let arr = [1, 2, 3, 4, 5, 6];
// op = arr.map((value, index, arr) => {
//   return value + 3;
// });
// console.log(op);

// let arr = [1, 2, 3, 4, 5, 6];
// op = arr.map((value, index, arr) => {
//   return arr[index] + 3;
// });
// console.log(op);

// let arr=["hi","hello","welcome","js"]
// op=arr.forEach(function(x,y,z){
//     console.log( x +"-10k coders")
// })

// let arr = ["hi", "hello", "welcome", "js"];
// let op = arr.map(function (x, y, z) {
//   // return x[0].toUpperCase()+x.slice(1)
//   //    return x.slice(0,-1)+x[x.length-1].toUpperCase()
//   return x.slice(0, -1) + x.at(-1).toUpperCase();
// });
// console.log(op);

// let arr=[1,2,3,4]
// let op=arr.join("hello ")
// console.log(op)

// let arr=[1,2,5,8,7]
// arr.pop()
// console.log(arr)

// let arr=[1,5,"hiii",8,"welcome"]
// let x=arr.push("kkk",99)
// console.log(x) //when we assign to a variable it prints the lenght of the array

// let arr=[1,2,5,8,"hiiii",99,"welcomeee"]
// arr.shift()
// console.log(arr)

// let arr=[1,2,5,8,"hiiii",99,"welcomeee"]
// arr.unshift(45,"shiva","vamshi")
// console.log(arr)

// let arr=["html","hiii",18,"welcome","js",555]
// let x=arr.slice(2,5)
// console.log(x)

// let arr=["html","hiii",18,"welcome","js",555]
// arr.splice(1,2,"shiva","vamshi",99,250)
// console.log(arr) //when we use variable it prints the removed elements

// let arr=[1,2,5,7,"hiii",99]
// let op=arr.indexOf(5)
// console.log(op)

// let arr=[1,2,5,7,"hiii",99,7,25,7]
// let op=arr.lastIndexOf(7)
// console.log(op)

