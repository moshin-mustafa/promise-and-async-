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



//  code with harry exercise solution
async function main() {
let min=1000 
let max =7000


let first = new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() *  (max - min + 1)) + min;
    setTimeout(() => {
        resolve("initilizing haking")
    }, delay);
})
 let t= await first
 console.log(t)
let k=document.getElementsByClassName("h1")
k[0].innerText=t
k[0].classList.add("blink");

    let second= new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random() *  (max - min + 1)) + min;
            setTimeout(() => {
                resolve("reading your files")
                
            }, delay);
    })
   ;
    t=await second
    document.getElementsByClassName("h1")[0].classList.remove("blink");
     k=document.getElementsByClassName("h2")
    
k[0].innerText=t

k[0].classList.add("blink");

    let third= new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random() *  (max - min + 1)) + min;
            setTimeout(() => {
                resolve("password files detetued")
             
            }, delay);
    })
    t=await third
    document.getElementsByClassName("h2")[0].classList.remove("blink");
     k=document.getElementsByClassName("h2")
k[1].innerText=t
k[1].classList.add("blink");
    let fourth= new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random() *  (max - min + 1)) + min;
            setTimeout(() => {
                resolve("sending pas file to server")
              
            }, delay);
    })
    t=await fourth
    document.getElementsByClassName("h2")[1].classList.remove("blink");
     k=document.getElementsByClassName("h2")
k[2].innerText=t
k[2].classList.add("blink");
}
main()
//  project work flow 
async function start() {
    async function login(username, Password) {
        let t = new Promise((resolve, reject) => {
            console.log("getting user")
            setTimeout(() => {
                if (username == "admin" && Password == 123) {
                    resolve("login")

                }
                else {
                    reject("invalid crendtial")
                }

            }, 2000);

        })
        


           let  y = await t
            console.log(y)
            console.log("prices", ["1000", "5000", "10000"])
            console.log("product", ["APPLE", "ORANGES", "KFC"])
            return y
            
        
    }
    
  

 async function getuser() {

    let nu=new Promise((resolve, reject) => {
        setTimeout(() => {


            resolve({
                     username:"admin",
                     id:123
                     
    
                 })
            
        
        
            
                    

        }, 3000);
        
    })

  let t= await nu
    console.log(t.username)
    console.log(t.id)      
    
    
    return t

 }


     

     

  
 
 async function oder(a) {
     let k = new Promise((resolve, reject) => {
         
         if (a == "apple") {
             setTimeout(() => {
                 
                 resolve({
                     a: "apple",
                     price: 1000
                    })
                }, 5000);
                
            }
            else if (a == "ORANGES") {
                setTimeout(() => {
                    
                    resolve({
                        a: "ORANGES",
                        price: 5000
                    })
                }, 6000);
                
            }
            else if (a == "KFC") {
                setTimeout(() => {
                    
                    resolve({
                        a: "KFC",
                        price: 10000
                    })
                }, 7000);
                
            }
            else{
                reject("invalid item")
                
            }
            
        })

            let u = await k
            console.log(u.a)
            console.log(u.price)
        return u
    }
    
    async function payment(amount) {
        
        let yy=new Promise((resolve, reject) => {
            if (amount==5000){
                setTimeout(() => {
                    resolve("payment succesful")
                }, 9000);
            }
            else{
                reject("insufficent balance")
            }
            
        })

            let py= await yy
            console.log(py)
        return py
        
    }
  
    
    async function complete(tt) {
        let comp=new Promise((resolve, reject) => {
            setTimeout(() => {
                if(tt==true){
                    resolve("succsesful")
                }
                else{
                    reject("something went wrong")
                }
            }, 10000);
            
        })
        
            let com=await comp
            console.log(com)
            return com
    }    
        try {
       let tt=login("admin",123)
       let ge = await tt
       
       let my=getuser()
        let yy= await my
        let mo=oder("ORANGES")
        let fo= await mo
        let py= payment(5000)
        let p= await py
        let com=complete(true)
        let proc=com    
   } catch (error) {
    
console.log(error)    
   }

  
    


}
start()




async function start() {
    async function login(username, password) {
        let log = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username == "admin" && password == 123) {
                    resolve({
                        username: "admin",
                        id: 101
                    })

                }
                else {
                    reject("Invalid Credentials")
                }
            }, 2000);
        })
        let system = await log
        console.log(system.username)
        console.log(system.id)
        return system
    }

    async function resturant(user) {
        let re = new Promise((resolve, reject) => {
            setTimeout(() => {

                if (user) {

                    resolve({
                        restaurant: "Food Palace",
                        status: "Open"
                    })
                }
                else {
                    reject("Restaurant Closed")
                }

            }, 3000);
        })
        let res = await re
        console.log(res.restaurant)
        console.log(res.status)
        let foodNames = ["Burger", "Pizza", "Biryani"]
        console.log(foodNames)
        return res
    }

    async function order(foodNames) {
        let odr = new Promise((resolve, reject) => {

            // console.log(foodNames)
            setTimeout(() => {
                if (foodNames == "Burger") {
                    resolve({
                        item: "Burger",
                        price: 1000
                    })
                }
                else if (foodNames == "Pizza") {
                    resolve({
                        item: "Pizza",
                        price: 1200
                    })
                }
                else if (foodNames == "Biryani") {
                    resolve({
                        item: "Biryani",
                        price: 1500
                    })
                }
                else {
                    reject("invalid food")
                }
            }, 4000);
        })
        let odrr = await odr
        console.log(odrr.item)
        console.log(odrr.price)
        return odrr
    }
    async function bill(order) {
        let billing = new Promise((resolve, reject) => {
            setTimeout(() => {
                let subtotal = order.price
                let tax = 0.1 * 100
                let total = subtotal + tax

                resolve({
                    subtotal: subtotal,
                    tax: tax,
                    total: total

                })

            }, 2000);

        })
        let bills = await billing
        console.log(bills.subtotal)
        console.log(bills.tax)
        console.log(bills.total)
        return bills
    }
    async function payment(amount, bills) {
        let amountdue = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount > bills) {
                    resolve({
                        payment: "Successful",
                        transactionId: 98765
                    })
                }
                else {
                    reject("Insufficient Balance")
                }
            }, 3000);
        })
        let amout = await amountdue
        console.log(amout.payment)
        console.log(amout.transactionId)
        return amout
    }
    async function assignrider(payment) {
        let rider=new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                        rider: "Ahmed",
                        bike: "Honda 125"
                })
            }, 2000);
        })
        let ri= await rider
        console.log(ri.rider)
        console.log(ri.bike)
        return ri
    }
    async function tracking(rider) {
    let trak= new Promise((resolve, reject) => {

           
        

        



  
})
    let tr= await 
    console.log(tr)
 
    return tr
    }

    try {

        let system = login("admin", 123)
        let nee = await system
        let res = resturant(nee)
        let status = await res
        let odr = order("Biryani")
        let confirm = await odr
        let bills = bill(confirm)
        let bilt = await bills
        let amout = payment(5000, bilt.total)
        let am = await amout
        let ri= assignrider(am)
        let newrider= await ri
        let tr=tracking(newrider)
        let tackk= await tr

    } catch (error) {
        console.log(error)
    }



}
start()

