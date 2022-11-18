// function MyArray() {
//     this.lenght = 0;
//     this.push = function (value) {
//       this[this.lenght] = value;
//       this.lenght++;
//       return this.lenght;
//     };
//   }
  
//   const array = [];
//   array.push(404);
//   array.push(456);
//   console.log(array);
  
//   const myArray = new MyArray();
//   myArray.push(404)
//   myArray.push(456)
//   console.log(myArray);
  



// function MyArrayPrototype() {
//     this.push = function (value) {
//       this[this.length++] = value;
//       // this.length++;
//       return this.length;
//     };
//   }
  
//   function MyArray() {
//     this.length = 0;
//   }
  
//   MyArray.prototype = new MyArrayPrototype();
  
  // const array = []; //instance
  // console.log(array);
  
  // const myArray = new MyArray();
  // console.log(myArray);