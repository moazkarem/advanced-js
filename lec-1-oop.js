// table of content

/*
Good understanding object (core of js)
1-literal object 
2-factories object 
3-constructor 
4-inheritance 
5-private props in constructor 
6-what is describtor 
7-class keyword
*/

// 1- literal object => that is common way to define object in js

// let user = {
//   name :'Moaz Karem' ,
//   age:20 ,
//   islogged:true ,
//   sayHello:function(){
//     console.log(`hello in my project ${this.name}`);
//   }
// }
// console.log(user.name);
// user.sayHello()

//======================================= 2 - Factories
// factroies object => it,s better some how from literal object , and make my code reusable but not better thing

// function factories(name, age, islogged) {
//   return {
//     name: name,
//     age: age,
//     islogged: islogged,
//     sayHello: function () {
//       console.log(`hello in my project ${this.name}`);
//     },
//   };
// }

// const user1 = factories('Zead Karem' , 21 , false)
// const user2 = factories('Ahmed' , 31 , true)
// user1.sayHello();
// user2.sayHello();

//========================= constructor
/* constructor is the better way to make your code clean and reusable and it;s the core in hnheritace and oop paradigms in js 

Notes : => in constructor its better to start witch capital letter 
  should be use new keword to make instance from the constructor if else that return undefined 

  الافضل انك لاتستخدم الميثود جوه ال constructor 
  لكن استخدمها جوه البروتوتايب 

*/

// function Person (name , age , status){
//    this.name = name
//    this.age = age
//    this.status = status
//    this.sayHello = function(){
//     return `hello in my project ${this.name}`
//    }
// }

// update person after add methods in the prototype

function Person(name, age, status) {
  //private property in constructor
  // let address = 'giza';
  this.name = name;
  this.age = age;
  this.status = status;
  Object.defineProperty(this, "address", {
    configurable: true, // can delete this property or not
    enumerable: true, // show it in itterable or not
    writable: true, // edit this private prop
    value: 'cairo',
  
  });
}

Person.prototype.sayHello = function () {
  return `hello in my project ${this.name}`;
};
const person1 = new Person("Ashraf Emad", 55, "Maried");
console.log(person1.address);
// console.log(person1.sayHello());
/*  
prototype chain 
prototype => used with the constructor 
__proto__ => used in instance that i initiate it from the constructor 

** every thing in js is instance from prototype in js 

array => new Array()
function=> new Function()
string => new String ()

__proto__ => بفضل اطلع بيها واجيب البروتو لحد موصل للاب الكبير وده القيمه بتاعته بتكون null 
*/
// console.log(Person.prototype);
// console.log(person1.__proto__);

// it same result
