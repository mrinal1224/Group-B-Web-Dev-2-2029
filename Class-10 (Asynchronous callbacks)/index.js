const fileSystem = require('fs')
console.log("start")

// read these 3 files

const data1 = fileSystem.readFileSync('f1.txt')

const data2 = fileSystem.readFileSync('f2.txt')

const data3 = fileSystem.readFileSync('f3.txt')


console.log("This is file 1 Data -> " + data1)
console.log("This is file 2 Data -> " + data2)
console.log("This is file 3 Data -> " + data3)




console.log("End")