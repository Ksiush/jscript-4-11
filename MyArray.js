// 1) Знайти середнє арифметичне значення усіх переданих аргументів, якщо аргументів не має - повертати null



const arMean = function() {
  const args = Array.from(arguments);
  const summ = args.reduce((sum, current) => 
{
  return sum + current;
})
return summ / arguments.length;
};

console.log(arMean(1,2,3,4,5,6));

// 2) Замінити усі максимальні значення в масиві на значення 0

const chMaxArr = [10,2,3,4,5,5,4,5,10];
const max = Math.max.apply(null, chMaxArr);
for (let i = 0; i <chMaxArr.length; i++) {
  if (chMaxArr[i] === max){
    chMaxArr[i] = 0;
  }
}
console.log(chMaxArr);
