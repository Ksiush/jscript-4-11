// 1) написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.

const number1 = prompt('Input number');

const isNumber = function(number){
    if (number%2 ===0) {
        return 'even';
    }
         return 'odd'
    
}
 console.log(isNumber(number1));




//  2)написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той, який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null.

 const isArgument = function(argument1, argument2) {
    if (typeof(argument1)=== typeof(argument2)) {
        if (argument1 >argument2)  {
            return argument1;
        }
        if (argument1<argument2) {
            return argument2;
        } 
        else {
            return null;
        }
    }
    else {
            return null;
    }    
 }
 console.log(isArgument(6,3))
