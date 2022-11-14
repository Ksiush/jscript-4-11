// while(true){
//     const PIN_CODE ='1111'
// }

// Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби

// зробити двома способами через while і for

// * це повинна бути функція(можливо і не одна)

// const numb1 = (18|24,30)
let count = 0;
while (true) {
  const result = Number(prompt("Введіть число, більше 15, менше 35, кратне 6d"));
  count++;

  if (result > 15 && result < 35 && result % 6 === 0) {
    console.log("You win");
    break;
  }
  if (count >= 3) {
    console.log("try again");
    break;
  }
}

const validate = function () {
  for (let i = 0; i < 3; i++) {
    const result = prompt("Введіть число, більше 15, менше 35, кратне 6c");
    if (result > 15 && result < 35 && result % 6 === 0) {
      return 'You win';
    }
  }
  return 'Try again';
};
console.log(validate());


const isValid = function(number){
    if (number > 15 && number < 35 && number % 6 === 0) {
        return true;
    }
    return false;
}

for (let i = 0; i < 3; i++) {
    const result = prompt("Введіть число, більше 15, менше 35, кратне 6b");
    if (isValid(result)){
        console.log('You win');
    }
    if (i==3){
        console.log('You loss');
        break;
    }
}

let condition = true;
while (!condition) {
    const n = prompt("Введіть число, більше 15, менше 35, кратне 6 a");
    condition = isValid(n);
}
console.log('You win');


// *
// **
// ***
// ****
// *****
// ******