// async function getdata () {
//     let x=fetch("https://jsonplaceholder.typicode.com/users")
//  let data = await x
// // console.log(data)
//  let complete= await data.json()
// let op= document.getElementsByClassName("api")
// op[0].innerText+=complete[0].name
// op[0].innerText+=complete[0].phone
//  console.log(complete[0])
// }
// getdata()






// async function getdata () {
//     let x=fetch("https://jsonplaceholder.typicode.com/users")
//  let data = await x
// console.log(data.ok)
// console.log(data.status)

// //  let complete= await data.json()
// // console.log(complete)
// }
// getdata()



// async function getData() {

//     let response = await fetch("https://jsonplaceholder.typicode.com/users");

//     // Write one line here to get the users
//     let res= await response.json()

//     console.log(response.status);
//     console.log(response.ok);
//     console.log(res[0].name);

//     // Print the first user's name

// }

// getData();

// async function getdata() {
    
//     let x=fetch("https://jsonplaceholder.typicode.com/users")
//      let data = await x
//         let res= await data.json()
//         // let users=res.name
//         // console.log(res[0].name)
//         for (let user of res) {
//                     console.log(user.name)
//                     // console.log(user.address.city)
            
//         }
// }
// getdata()

// async function getdata() {
    
//     let x=fetch("https://jsonplaceholder.typicode.com/users")
//      let data = await x
//         let res= await data.json()
//         // let users=res.name
//         // console.log(res[0].address.city)
//         for (let user of res) {
//              console.log(user.name,"-",user.address.city)
//                     //console.log(user.address.city)
//                     // console.log(user.address.city)
            
//         }
// }
// getdata()
async function getdata() {
    
    let x=fetch("https://jsonplaceholder.typicode.com/users")
     let data = await x
        let res= await data.json()
        let u= document.getElementsByClassName("api2")
        // let users=res.name
        // console.log(res[0].address.city)
        for (let user of res) {
            //  console.log(user.name,"-",user.address.city)
                    //console.log(user.address.city)
                    // console.log(user.address.city)
            u[0].innerHTML+=user.name+"<br>"
        }
}
getdata()

                                                // Status	Meaning
                                                // 200	Success ✅
                                                // 201	Created (usually after POST)
                                                // 400	Bad Request
                                                // 401	Unauthorized
                                                // 403	Forbidden
                                                // 404	Not Found
                                                // 500	Internal Server Error