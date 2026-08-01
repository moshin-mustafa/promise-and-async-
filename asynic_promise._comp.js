// async function getdata(data) {
//  let t =new Promise((resolve, reject) => {
//        setTimeout(() => {
//         resolve(455)
//        }, 9000);
       
//  })
//  return t
 
//  }
//  console.log("hellow world ")
//  async function main() {
//  console.log("waiting for data")

//  let data =await getdata()

//  console.log(data) 

//  console.log("loading mods" )
   
//  }
//  main()




//  let t = new Promise((resolve, reject) => {
//       console.log("waiting for task to get complete")
//       setTimeout(() => {
//             resolve("Task Completed")
//       }, 2000);
//  })
//  .then((x)=>{
//       console.log(x)
//  })




///////////////////////////////////////////

// let y = new Promise((resolve, reject) => {
//       let age =15
//       if (age>=18){
//             resolve ("welcome")
//       }
//       else{
//             reject("Access Denied")
//       }
// })
// .then((x)=>{
// console.log(x)

// }).catch((err)=>{
//       console.log(err)
// })







let t = new Promise((resolve,reject) => {

    resolve({
      name: "Ali",
    age: 22
    
 }) 

 
})
t.then(x=>{

    console.log(x.name)
    console.log(x.age)
})



// Promise.resolve(5)
// .then((x)=>{
//       console.log(x)
//       return x+5
// }).then((x)=>{
//       console.log(x)
//       return x+20
// }).then((x)=>{
//       console.log(x)
//       return x-5
// }).then((x)=>{
//       console.log(x)

// })



// Promise.resolve("Hello")
// .then((x)=>{
//       console.log(x)
//       return x+ " Mohsin"
// }).then((x)=>{
//       console.log(x)
//     return x.toUpperCase(x)
// }).then((x)=>{
//     console.log(x)
//     return x+"!"
// }).then((x)=>{
//     console.log(x)
// })







// let p = Promise.resolve(10);

// p.then((x)=>{
//     console.log(x);
// });

// p.then((x)=>{
//     return x*2;
// }).then((x)=>{
//     console.log(x);
// });





// let p = new Promise((resolve,reject)=>{

//     reject("Wrong Password");

// });

// p.then((x)=>{

//     console.log(x);

// }).catch((err)=>{

//     console.log(err);

// });






// Promise.resolve(5)

// .then((x)=>{

//     return x*2;

// })

// .then((x)=>{

//     throw "Error Happened";

// })

// .then((x)=>{

//     console.log(x);

// })

// .catch((err)=>{

//     console.log(err);

// });





// async function main() {
      
//       let p = new Promise((resolve)=>{
            
//             setTimeout(()=>{
                  
//                   resolve("Finished");
                  
//             },2000);
            
//       });
//           let x=await p    

            
//             console.log(x);
    
// }
// main()






// Exercise 10

// Write an async function.

// Inside it,

// wait 3 seconds,

// then print

// Loading...

// then

// Done

// async function main() {
// let t =new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("loading")
//     }, 3000);
// })


// let y=await t
// console.log(y)
// console.log("done")
         
// }

// main()


// Exercise 11

// Create a promise.

// If

// let marks = 70;

// Resolve

// Pass

// Otherwise reject

// Fail

// async function secondmain() {
//    let marks=40
//     let y = new Promise((resolve, reject) => {
//      if (marks>50){

//          resolve("pass")
//      }
//      else{

//          reject("fail")    
//      }

//     })
    
//     try {
//     let j= await y
    
//     console.log(j)
// } catch (er) {
//     console.log(er)
// }

// }
// secondmain()