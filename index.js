'use strict'


// Виправити помилки в коді


// const sentence = "     to         BE       oR   nOt        To     bE ";
// function toJadenCase(str) {
// return str
// .trim()
// .toLowerCase()
// .split(" ")
// .map((word) => word[0].toUpperCase() + word.substring(1))
// .join(" ");
// }
// console.log(toJadenCase(sentence)); //повинен бути результат:  'To Be Or Not To Be'


const sentence = "     to         BE       oR   nOt        To     bE ";
function toJadenCase(str) {
return str
.trim()
.toLowerCase()
.split(" ")
.filter((word) => word !== '')
.map((word) => word[0].toUpperCase() + word.substring(1))
.join(" ");
}

console.log(toJadenCase(sentence))