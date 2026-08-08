// let x= {
//     jump:true
// }
// let y ={
//     eat:true
// }
// y.__proto__=x
// console.log(y.jump)

//  class student{
// constructor(){
//     console.log("the record of the student is")
// }
//      id(idd) {
//          console.log("the id of student is",idd)
        
//      }
//      marks(mar){
//         console.log("the marks of the student is",mar)
//      }
// // id(787)
// // marks(77)


//  }
//  let x=new student()
// x.id(787)
// x.marks(78)

 class student{
constructor(name){
    this.name=name
    console.log("the record of the student is")
}
     id(idd) {
         console.log("the id of student is",idd)
        
     }
     marks(mar){
        console.log("the marks of the student is",mar)
     }
// id(787)
// marks(77)


 }
 let x=new student("mohsin")
 console.log(x.name)
x.id(787)
x.marks(78)

