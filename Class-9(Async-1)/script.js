// Synchronous  , single threaded

console.log('Start')

let b = 20
let a = 40


function sayHello(){
    for(let i=0 ; i<10 ; i++){
        console.log("hello")
    }
}


setTimeout(sayHello) // make this wait

// sayHello()

console.log(b) // 20
console.log(a) // 40

console.log("End") // end