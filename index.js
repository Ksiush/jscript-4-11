'use strict'

// Написати рекурсивну функцію, яка обчислює факторіал числа.
// Функція повина приймати тип данних: number або bigint, і кидатися помилками.
// Викликати функцію, використовуючи конструкцію try...catch
 


function factorial(num) {
   if (typeof num !== 'number' && typeof num !== 'bigint'){
    throw new TypeError('Enter only number')
   } 
   if (num <0 || num <0n){
    throw new RangeError('Enter positive number')
   }
   if (num=== 0 || num ===0n){
    return num * factorial(num -(typeof num === 'bigint' ? 1n : 1))
   }
 }

 try {
    console.log(factorial(3));
    console.log(factorial(2n));
 } catch (error) {
    if (error instanceof TypeError){
        console.log(error);
    }
    if (error instanceof RangeError){
        console.log(error);
    }
 }