// async await is a way to handle promises in a better way when
// we need to perform sequinetial operations

const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise 1 Resolved");
  }, 10000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise 2 Resolved");
  }, 5000);
});

// const p3 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Promise 3 Resolved");
//   }, 70000);
// });

//resolve this promise

// p1.then(function(result){
//     console.log(result)
// })

async function greet() {
  // console.log("Scaler");
  // let result1 = await p1; // suspenion

  // console.log("Hello");
  // let result2 = await p2; 

  // console.log("World");

  // let result3 = await p3; 

  // console.log(result1);
  // console.log(result2)
  // console.log(result3)

   const res1 = await p1 // 10 sec
   const res2 = await p2 // 5 sec

   console.log(res1)
   console.log(res2)



} // Synchornously

function sayBye() {
  console.log("Byeee");
}

greet();
sayBye();
