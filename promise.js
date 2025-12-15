//3.1
// function getHello(){
//     const p1= new Promise((res, rej)=> {
//         setTimeout(()=> {res("Hello")}, 500)
//     })
//     return p1
// }
// getHello().then((result)=> {console.log(result);
// })

//3.2
// function addAsync(a,b){
//     let p1 = new Promise((res, rej)=>{
//         setTimeout(()=> {res(a+b)},1000)
//     })
//     return p1
// }

// addAsync(5,7).then((result)=>{console.log(result);
// })

//3.3
// function checkNumber(n){
//     const p1 = new Promise((res, rej)=> {
//         if (n%2==0){
//             res("Even")
//         }
//         else {
//             rej("Odd number not allowed")
//         }
//     })
//     return p1
// }
// checkNumber(7).then((result)=> {console.log(result);
// }).catch((result)=> {console.log(result);
// })

//3.4
// function login(username, password){
//     const p1 = new Promise((res, rej)=> {
//         setTimeout(()=>{
//             if (username =="admin" && password =="1234"){
//                 res("Login successful")
//             }
//             else {
//                 rej("Invalid credentials")
//             }
//         }, 1200)
//     })
//     return p1
// }

// login("ad11min", "1234").then((result)=> {console.log(result);
// }).catch((result)=> {console.log(result)})

//3.5

// function getNumber(){
//     const p1 = new Promise((res,rej)=> {
//         setTimeout(()=> {res([1,2,3,4,5])})
//     })
//     return p1
// }

// getNumber().then((result)=> result.forEach(element => {console.log(element);

    
// }))

//3.6

// function unstableOperation(){
//     const p1 = new Promise((res, rej)=> {
//         setTimeout(()=>{
//             if (Math.random()<0.5){
//                 res("Success")
//             }
//             else {
//                 rej("Random failure")
//             }
//         }, 1000)
//     })
//     return p1
// }

// unstableOperation().then((result)=> {console.log(result);
// }).catch((result)=> {console.log(result);
// })

//3.7
// function getUser(){
//     const p1 = new Promise((res, rej)=> {
//         setTimeout(()=>{
//             res({ name: "Dana", age: 16 })
//         }, 600)
        
// })
//     return p1
// }
// getUser().then((result)=> {console.log("User:", result['name'], result['age']);
// })

//3.8
// function squarePositive(n){
//     const p1 = new Promise((res, rej)=> {
//         setTimeout(()=>{
//             if (n>=0){
//                 res(n*n)
//             }
//             else {
//                 rej("Negative number not allowed")
//             }
//         }, 500)
//     })
//     return p1
// }

// squarePositive(-1).then((result)=> {console.log(result);
// }).catch((result)=> {console.log(result);
// })

//3.9
// function  waitTwoSeconds(){
//     const p1 = new Promise((res, rej)=> {
//         setTimeout(()=> {res("Done waiting")}, 2000)
// })
//     return p1
// }
// waitTwoSeconds().then((result)=> {console.log(result)})

//3.10

// function downloadFile(url){
//      const p1 = new Promise((res, rej)=> {
//         setTimeout(()=>{
//             if (url.startsWith("http")){
//                 res("Downloaded from URL")
//             }
//             else {
//                 rej( "Invalid URL")
//             }
//         }, 1500)
//     })
//     return p1
// }

// downloadFile("col.org.il").then((result)=> {console.log(result);
// }).catch((result)=> {console.log(result);
// })