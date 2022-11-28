

//1) Написати функцію струлку, яка приймає безліч аргументів і повертає їх добуток.

//2) Є масив чисел, треба написати функцію, яка повертає масив з двох елементів, які є мінімальним і максимальним значенням джерельного масиву.


// 1) Написати функцію струлку, яка приймає безліч аргументів і повертає їх добуток.

const arrNumb = [1, 2, 3, 8, 9];
const arrNumb2 = [4, 5, 6];

//1
const numbers = (initial = 0, ...numbers) =>
  numbers.reduce((acc, numbers) => numbers * acc, initial);

console.log(numbers(...arrNumb));

const findMinMax =(...numbers)=>[Math.min(...numbers), Math.max(...numbers)]

console.log(findMinMax(...arrNumb))








