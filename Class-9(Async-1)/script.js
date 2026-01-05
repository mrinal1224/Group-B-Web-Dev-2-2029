// Synchronous  , single threaded

console.log('Start')

let b = 20
let a = 40


function sayHello(){
    for(let i=0 ; i<10 ; i++){
        console.log("hello")
    }
}

function sayBye(){
    for(let i=0 ; i<10 ; i++){
        console.log("Byee")
    }
}



setTimeout(sayHello , 7000) // make this wait
setTimeout(sayBye, 5000) // make this wait



console.log(b) // 20
console.log(a) // 40

console.log("End") // end





