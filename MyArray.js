// Є массив [1,2,3,1,5,6,1,2,5], треба використовуючи цей масив створити новий, в якому будуть присутні тільки тільки ті значення які повторюються.
// Результат буде [1,2,5]
// Якщо в джерельному масиві усі значення унікальні, то створюєте новий пустий масив.


// *зробити функцію


const arr = [1,2,3,1,5,6,1,2,5];
const selectNonUniq=(array) => {
  const uniqSet = new Set();
  for (let i = 0; i < array.length; index++) {
    for(let j=0; j<i; j++ ){
      if (arr[j] === arr[j]){
        uniqSet.add(arr[i])
      }
    }
    
  }
  return Array.from(uniqSet);
}
console.log(selectNonUniq(arr));



