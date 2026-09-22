// async function getdata(){
//     try{const userRsp= await fetch("https://jsonplaceholder.typicode.com/users");
//     const user=await userRsp.json()
//     const postsRsp= await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts=await postsRsp.json()
//     const cmntRsp= await fetch("https://jsonplaceholder.typicode.com/comments");
//     const cmnt=await cmntRsp.json()
//     Promise.all([user,posts,cmnt])
//     {
//         console.log(user.length);
//     console.log(posts.length);
//     console.log(cmnt.length);}
//     }
//     catch(error
//     ){
// console.log(error)
//     }
// }getdata()

// const p1=Promise.resolve("user loaded");
// const p2=Promise.reject("failed to load posts")
// const p3=Promise.resolve("Comments load");
// Promise.all([p1,p2,p3])
//     .then((result)=>console.log(result))
//     .catch((error)=>console.log(error))

// const user1={name:"A"};
// const user2={name:"B"}
// let weakMap=new WeakMap();
// weakMap.set(user1,"Doctor");
// weakMap.set(user2,"Developer");
// console.log(weakMap)

// class Product{
//     constructor(id,title,price){
//         this.id=id;
//         this.title=title;
//         this.price=price;
//     }
// }
// async function prdct(){
//     try{
// let link=await fetch('https://dummyjson.com/products');
// let data= await link.json();

// let prd=data.products

// .map((prod)=>{
//     return new Product 
//     (
//         prod.id,
//         prod.title,
//         prod.price
// )
// })
// console.log(prd)


//     }catch(error){
//         console.log(error)
//     }

// }
// prdct()
// class employee{
//     constructor(name,dep,sal){
//      this.name=name;
//      this.dep=dep;
//      this.sal=sal;
//     }
//     getdetail(){
//         return{
//             Name: this.name  ,
//             dep:  this.dep ,
//             sal:this.sal

//         }  
//     }
// }
// const emp=new employee("Fida","it",1000000)
// const emp1=new employee("hida","it",10000)
// console.log(emp.getdetail())

// class Product{
//      constructor(id,title,price){
//        this.id=id;
//        this.title=title;
//        this.price=price;
//      }

// }
// async function prd() {
//     try{
//     let data=await fetch('https://dummyjson.com/products');
//     let prd= await data.json();
//     let product=prd.products.map((prod)=>{
//         return new Product(prod.id,
//                prod.title,
//                 prod.price)
            
//     })
    
    
//     let dprd=structuredClone(product);
//     dprd[0].price=10;
//  console.log(dprd);
//  console.log(product);
//  let bprice=product.filter((pro)=>pro.price<10);
//  console.log(bprice)
//  let tprice=product.reduce((tot,pro)=>{ return tot+pro.price},0);
// console.log(tprice);
// let proccesd=new WeakSet();
// product.forEach((pt)=>proccesd.add(pt))
// console.log(proccesd.has(product[0]))


//     }
//     catch(error){
//         console.log(error)
//     }
   
// }
// prd()

// class cls{
//     constructor(usr,prdct){
//         this.usr=usr;
//         this.prdct=prdct;
//     }
// }
// async function ft(){
//  let response=await fetch('https://dummyjson.com/products/1');
//  let response1=await fetch('https://dummyjson.com/users/1');
//  let data=await response.json();
//  let data1=await response1.json();

//  let obj=new cls(data,data1);
//  Promise.all([data,data1])
//    .then(()=> console.log(obj))
// }
// ft()

// let calc=new Promise((resolve)=>{
//     let res=25+15;
//     resolve(res)
// });
// calc.then((msg)=>console.log(msg))

// let prm=new Promise(resolve=>setTimeout(()=>resolve("welcome to js")),1000)
// async function showMessage(){
//     let msg=await prm ;
//     console.log(msg)
// }
// showMessage()

// class cls{
//     constructor(title,author,price){
//      this.title=title;
//      this.author=author;
//      this.price=price;
//     }
// }
// let obj=new cls("boook","john",200);
// console.log(obj)

// let user1={name:"A"};
// let user2={name:"B"};
// let weakmap= new WeakMap();
// weakmap.set(user1,"dev");
// weakmap.set(user2,"hod");
// console.log(weakmap)


// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(response=>response.json())
//     .then(user=>console.log(user.name))
//     .catch((error)=>{console.log(error)})

// let prm=new Promise(resolve=>resolve("javascript"))
// .then((msg)=>msg.toUpperCase())
// .then(msg=>msg+ " IS FUN")
// .then((msg)=>console.log(msg))

// const student={
//     name:"Ali",
//     marks:{
//         maths:80,
//         physics:75
//     }
// };
// let std=structuredClone(student);
// std.marks.maths=90;
// console.log(std)
// console.log(student)

// class employee{
//     constructor(name,salary){
//         this.name=name;
//         this.salary=salary;
//     }
// }
// let emp1=new employee("fida",100000);
// let emp2=new employee("hida",50000);
// let emp3=new employee("rida",10000);
// let emp=[emp1,emp2,emp3];
// let res=emp.filter((em)=>em.salary>30000)
// console.log(res)

// let user=new Promise((resolve)=>resolve("Ali"))
// let role=new Promise((resolve)=>resolve("developer"))
// let exp=new Promise((resolve)=>resolve("2 years"))
// Promise.all([user,role,exp])
// .then((msg)=>console.log(msg[0]+ " is a " + msg[1] + " with " + msg[2] +" experience"))

// let weakset=new WeakSet();
// let user={
//     name:"fida",
//     age:21
// }
// let user1={
//     name:"hida",
//     age:20
// }
// let user3={
//     name:"fiii"
// }
// weakset.add(user);
// weakset.add(user1);

// function isVerify(usr){
//    return  weakset.has(usr)
// }
// console.log(isVerify(user));
// console.log(isVerify(user1));
// console.log(isVerify(user3));

// function getdata(){
//     return Promise.resolve("Fida")
// }
// function getAge(){
//     return Promise.resolve(21)
// }
// function getCity(){
//     return Promise.resolve("kozhikode")
// }
// async function fnc(){
//     let name=await getdata();
//     let age= await getAge();
//     let city=await getCity();
//     console.log("Name:" + name);
//     console.log("Age:" + age)
//     console.log("city:" +city)
// }
// fnc()
// class Cls{
//     constructor(id,title,price){
//         this.id=id;
//         this.title=title;
//         this.price=price;
//     }
// }
// async function prod(){
//   try{let response= await fetch('https://dummyjson.com/products');
//   let data=await response.json();
//   let product=data.products.map((prd)=>{
//     return new Cls(prd.id,
//         prd.title,
//         prd.price
//     );
// });
//  console.log(product)
// let pp=product.filter((prd)=>{ return prd.price<100})
// console.log(pp)
// pp.forEach((prd)=>console.log(prd.title))}


//  catch(error){
//     console.log(error)
//  }
// }
// prod()

// let p1=new Promise((resolve,reject)=>resolve())
// let p2=new Promise((resolve,reject)=>reject())
// let p3=new Promise((resolve,reject)=>resolve())
// let p4=new Promise((resolve,reject)=>reject())

// Promise.allSettled([p1,p2,p3,p4])
// .then(result=>{
//     let success=result.filter((res)=>
//         res.status==="fulfilled"
//     );
//     let fail=result.filter((res)=>
//         res.status==="rejected"
//     );
//     console.log("success:",success.length)
//     console.log("fail:",fail.length)
// })

// class Address {
//     constructor(city) {
//         this.city = city;
//     }
// }

// class Person {
//     constructor(name, address) {
//         this.name = name;
//         this.address = address;
//     }
// }
// let prs=new Person("fida",
//     new Address("kozhikode")
// )
// let prd=structuredClone(prs)
// console.log(prs)
// console.log(prd)
// prd.address.city="kochi";
// console.log(prd.address.city)
// console.log(prs.address.city)
// class prod{
//     constructor(id,title,price){
//         this.id=id;
//      this.title=title;
//         this.price=price;
//     }
// }

// async function hd(){
//     try{let response=await fetch('https://dummyjson.com/products');
//     if(!response.ok){
//         throw new Error('HTTP Errors:'+response.status);
//         }
//     let data=await response.json()
//     let product=data.products.map((produc)=>{
//         return new prod(produc.id,
//             produc.title,
//             produc.price
//         )
        
//     })
// console.log(product)}
//     catch(error){
//         console.log(error)
//     }

// }
// hd()

// async function fdata(){
//     for(att=1;att<=3;att++){
//         try{
//         let response=await fetch("https://dummyjson.com/products/1")
//         if(!response.ok){
//             throw new Error("rqst fail")
//         }
//         let data=await response.json();
//         console.log(data);

//     }catch(error){
//         console.log('${att} attempts failed');
//         if(att===3){
//             throw new Error("fail")
//         }
//     }
//     }
    
// }
// fdata().catch(error=>console.log(error))

// async function ftc() {
   
//     for(let i=1;i<=3;i++){
//         try{
//      let response=await fetch('https://dummmyjson.com/products/1');
//     if(!response.ok){
//         throw new Error("rqst fail")
//     }
//     let data=response.json();
//     console.log(data)
//         }catch(error){
//             console.log(`${i} attempts failed`)
//         }
         
// }
    
// }
// ftc()

// class User{
//     constructor(id,name){
//         this.id=id;
//         this.name=name;
//     }
// }
// class Product{
//     constructor(id,title,price){
//         this.id=id;
//         this.title=title;
//         this.price=price;
//     }
// }
// async function getData(){
//     try{
//         let rsp=await fetch("https://dummyjson.com/users/1")
//         let rsp1=await fetch("https://dummyjson.com/products/1")
//         let data=await rsp.json();
//         let data1=await rsp1.json();
//         let user=new User(
//             data.id,
//             data.name
//         );
//         let product=new Product(
//             data1.id,
//             data1.title,
//             data1.price
//         )
//         Promise.all([user,product])
//          {
//             console.log(user.name),
//              console.log(product.title),
//               console.log(product.price)
//          }



//     }catch(error){
//         console.log(error)
//     }
// }
// getData()
async function phc(){
let data =await fetch("https://jsonplaceholder.typicode.com/users")
let rsp=await data.json()
for(let r of rsp){
    console.log(r)
    
}

}
phc()
