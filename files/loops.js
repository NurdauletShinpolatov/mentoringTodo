// ===================================== while ========================================

// i=5
// while(i > 0){
//   console.log(i);
//   i--
// }



// ===================================== do while ========================================

// i = 60
// do {
//   console.log("nimadir");
//   i++
// } while (i < 5)




// ===================================== skipping arguments ========================================

// let i = 5;
// for (;;) {
//   // if (i==5) {
//   //   continue
//   // }
//   console.log(i);
//   i--
//   if (!i) {
//     break;
//   }
// }

// for (let i = 0; i < 5; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(i);
// }




// ===================================== labeled statements ========================================


// tashqari:
// for (let i = 0; i < 5; i++) {

//   ichkari:
//   for (let j = 0; j < 3; j++) {
//     if (i === 2 && j === 1) {
//       break tashqari; // Breaks out of the outer loop
//     }
//     console.log("j", j);
//   }
//   console.log("i", i);
//   console.log("=======");
// }





// ===================================== for in (object) ========================================

// const person = {
//   name: 'Alice',
//   age: 30,
//   occupation: 'Engineer'
// };

// for (let key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// const array = [
//   { 
//     name: "Bahrom", 
//     age: 22,
//     gender: 'gay'
//   },
//   { name: "Said", age: 32 },
//   { name: "Jahongir", age: 25 },
// ];

// for(const obj of array){
//   console.log("======================");
//   for (const key in obj) {
//     console.log(key, obj[key]);
//   }
// }

// let arr = [0:'a', 1:'b', 2:'c']
// console.log(arr[2]);

// let test = 
// {
//   phone: "+998913715001",
//   name: "Nurdaulet",
//   id: "2110017"
// }

// for(const nimadir in test){
//   console.log(nimadir,  test[nimadir]   );
// }

// ===================================== for of (array, string, map, set) ========================================

// const numbers = [1, 2, 3, 4, 5];

// for (let num of numbers) {
//   console.log(num);
// }