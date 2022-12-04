
'use strict';

/**
 * 
 * @param {string} /fname
 * @param {string}  /lname
 * @param {number}  /age
 */

// class UserClasses{
//   constructor(fname, lname,age){
//     if (typeof fname!== 'string'){
//       throw new TypeError('fname must be string')
//     }
//     if (typeof lname !=='string'){
//       throw new TypeError('lname must be string')
//     }
//     if (typeof age !== 'number'){
//       throw new TypeError('age must be number')
//     }
//     if (age <0 || age>150){
//       throw new RangeError('age must be 0>149')
//     }
//     this.fname=fname;
//     this.lname=lname;
//     this.age=age;
//   }

// fullName(){
//   return `${this.fname} ${this.lname}`;
// }

// isAdult(){
//   return this.age >=18;

// }
// }

// try {
//   const person2 = new UserClasses('Tim', 'Rot', 58);
//   console.log(person2.fullName())
//   console.log(person2.isAdult())
// } catch (error) {
//   console.log(error)
// }

// console.log('**********')


// const person3 = new UserClasses('Rob, Bob, 12');


// class Worker{
//   constructor(fname, lname,rate, day=68){
//     this.fname=fname;
//     this.lname=lname;
//     this._day = day

//     this.rate = rate;
//   }

//   get day(){
//     return this._day;
//   }

//   set day(day){
//     if(typeof day !== 'number'){
//       throw new TypeError('day must be number')
//     }
//     if(day > MAX_DAYS || day <1){
//       throw new RangeError('day must be 1....364')
//     }
//     this._day=day;
//   }
// }

// try {
//   const person2 = new Worker('Tom' ,'tom', 153);
//   person2.day=89
//   console.log(person2.day())
// } catch (error) {
//   console.log(error)
// }
  



//  const worker1 = new Worker('John', 'Mat');

//  console.log(worker1.workDays())





//  class RangeValidator{
//   constructor(_from=0,_to=10){
//   this._from = _from;
//   this._to = _to
//   }
//  getRange(){
//   return this._from, this._to
// }
// get from(){
//   return this._from;
//  }
//  set to(_to){
//   if(typeof to !== 'number'){
//     throw new TypeError('to must be number')
//   }
//    if(this.to > 10 || this.to <0){
//     throw new RangeError('to must be 0....10')
// }
// this._to=to;
 
//   }
//   validate(){

//   }
// }

// "use strict";

// class UserClasses {

//   /**
//    *
//    * @param {string} fname
//    * @param {string} lname
//    * @param {number} age
//    */
//   constructor(fname, lname, age, isBan = false) {
//     if (typeof fname !== "string") {
//       throw new TypeError("fname must be string");
//     }
//     if (typeof lname !== "string") {
//       throw new TypeError("lname must be string");
//     }
//     this.fname = fname;
//     this._lname = lname;
//     this.age = age;  // setter
//     this.isBan = isBan;
//   }
//   //getters & setters
//   get age(){
//     return this._age; // get private
//   }
//   set age(age){
//     if (typeof age !== "number") {
//       throw new TypeError("age must be number");
//     }
//     if (age < MIN_AGE || age > MAX_AGE) {
//       throw new RangeError("age must 0..150");
//     }
//     this._age = age; //set private
//   }
//   //constructor logic
//   getFullName() {
//     return `${this.fname} ${this._lname}`;
//   }
//   isAdult() {
//     return this._age >= ADULT_AGE;
//   }
//   //static
//   static isUserClasses(value){
//     return value instanceof UserClasses;
//   }
//   static getInstance(){
//     return new UserClasses('Test','Testik',44);
//   }
//}

// try {
//   //debugger
//   const test = UserClasses.getInstance();
//   console.log(test)
//   const persone2 = new UserClasses('Tom', 'Rot', 58);
//   console.log(UserClasses.isUserClasses(persone2));
//   console.log(UserClasses.isUserClasses({}));
//   //persone2.#age = 45;
//   //так як нижче робити не можна!!!!
//   //console.log(persone2._age);
//   console.log(persone2.getFullName());
//   console.log(persone2.isAdult());
//   console.log(persone2.fname);
//   persone2.age = 56; //setter 
//   console.log(persone2.age); //getter
//   console.log(persone2);
//   //так як нижче робити не можна!!!!
//   // console.log(persone2._lname);
//   // console.log(persone2._age);
// } catch (error) {
//   console.log(error);
// }

//console.log("***********");


