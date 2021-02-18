// let idMaker = {
//     [Symbol.iterator](){
//         let nextId = 8000;
//         return {
//             next(){
//                 return {
//                     value:nextId++,
//                     done:false
//                 }
//             }
//         }
//     }
// }
// let it = idMaker[Symbol.iterator]();
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)


// function doAsync(){
//     return new Promise(function (resolve, reject){
//         console.log('in Promise code');
//         setTimeout(function(){
//             console.log('resolving....');
//             resolve();
//         }, 2000)
//     })
    
// }

// doAsync()

// function getAnotherPromise(){
//     return new Promise(function (resolve, reject){
//         console.log('in Promise code');
//         setTimeout(function(){
//             console.log('resolving.... from promise two');
//             resolve();
//         }, 2000)
//     })
    
// }
// function doAsync(){
//     return new Promise(function (resolve, reject){
//         console.log('in Promise code 3' );
//         setTimeout(function(){
//             console.log('resolving....');
//             resolve(getAnotherPromise());
//         }, 2000)
//     })
    
// }

// doAsync().then(()=>{
//     console.log('totally resoleve')
// })
// doAsync().catch(()=>{
//     console.log('some error')
// })

let amount = [800, 810,820];
let salaries = Array.from(amount, v => v+100);
console.log(salaries)

