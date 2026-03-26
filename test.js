// const PENDING = "Pending"
// const FUFILLED = "Fufilled"
// const REJECTED = "Rejected"


console.log("We are here 1")
console.log("We are here 2")
console.log("We are here 3")

const Name = "me"
Promise.then().resolve
    setTimeout(500)
  console.log("complete")
});
// class myPromise {
//     constructor(executor) {
//         this.state = PENDING
//         this.result = null
//         this.onFufilledCallbacks = []
//         this.onRejectedCallbacks = []

//         const resolve = (value) => {
//             if (this.state === PENDING) {
//                 this.state = FUFILLED
//                 this.result = value
                
//                 queueMicrotask(() => {
//                     this.onFulfilledCallbacks.forEach(callback => callback(value))
//                 })
//             }
//         }
//     const reject = (reason) => {
//         if (this.state === PENDING) {
//             this.state = REJECTED
//             this.result
//         }
//     }


// const MyPromise = require('./test')
// const p = new MyPromise((resolve) => {
//     console.log("1. Starting...")
//     setTimeout(() => resolve("Success"))
// });

// p.then(val => {
//     console.log("3. Chain 1:", val);
//     return "Next result"
// })
// .then(val => {
//     console.log("4. Chain 2", val)
// })
// .catch(err => console.error(err));
// console.log("2. Script continuing...")
