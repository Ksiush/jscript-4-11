// написати скрипт (можна функцію можна без), який виводить індекс максимального елемента в масиві. Якщо максимальних елементів декілька(значення однакові) - виводить індекс останнього
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; => індекс 5

const getIndexOfMax = (arr) => {
  const max = Math.max.apply(null, arr);
  return arr.lastIndexOf(max);
}

console.log(getIndexOfMax([1,19, 5.6,7,9,4,19]));

// * повертати кількість максимальних(однакових) елементів
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; =>кількість  2


const getCountMax = (arr) => {
  arr.sort();
  const result = arr.filter(el => el ===arr.slice(-1) [0]);
  return result.lenght;
}
console.log(getCountMax([1,9,5,6,7,9,4,6]));