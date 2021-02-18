function findMax(numbers){
    let maximum = numbers[0]
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > maximum){
            maximum = numbers[i]
        }
    }
    return maximum
}

console.log(findMax([5,2,9,8,7,13]))


// function bestRating(numbers){

//     for(let j = 0; j< numbers.length-1; j++){

    
//     let max_num = numbers[0]
//     let max_location = j
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] > max_num){
//             max_num = numbers[i]
//             max_location = i
//         }
        
//     }
    
//     numbers[max_location] = numbers[j]
//     numbers[j] = max_num
//     }
//     return numbers
// }
// console.log(bestRating([5,2,9,8,7,13]))

// let promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({
//             firstname:'john',
//             lastname:'really'
//         })
//     }, 1000);
// })
// promise.then((res)=>{
    
//     console.log(res)
// })

// console.log('this is part 1')

let userPromise = fetch('https://randomuser.me/api')
console.log(userPromise)
userPromise.then((res)=>{
    return res.json()
})