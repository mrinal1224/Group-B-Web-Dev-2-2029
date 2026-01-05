const fileSystem = require("fs");
console.log("start");

// read these 3 files (Synchronous way)

// const data1 = fileSystem.readFileSync('f1.txt')

// const data2 = fileSystem.readFileSync('f2.txt')

// const data3 = fileSystem.readFileSync('f3.txt')

// console.log("This is file 1 Data -> " + data1)
// console.log("This is file 2 Data -> " + data2)
// console.log("This is file 3 Data -> " + data3)

// Asynchronously reading Files

fileSystem.readFile("f1.txt", function (err, data) {
  if (err) {
    console.log("Cannot read file due to", err);
  }

  console.log("This is file 1 Data -> " + data);
});

fileSystem.readFile("f2.txt", function (err, data) {
  if (err) {
    console.log("Cannot read file due to", err);
  }

  console.log("This is file 2 Data -> " + data);
});

fileSystem.readFile("f3.txt", function (err, data) {
  if (err) {
    console.log("Cannot read file due to", err);
  }

  console.log("This is file 3 Data -> " + data);
});

console.log("End");
