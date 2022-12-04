"use strict";

// Squirrel
// -name(string) зробити setter&getter
// -color(string)
// -jump() // повертає рядок у вигляді '[name] is jump'

// FlySquirrel
// -name(string) зробити setter&getter
// -color(string)
// -maxFlyLength(number) значення за замовчуванням 450
// -jump() // повертає рядок у вигляді '[name] is jump'
// -fly(length) // повертає рядок у вигляді '[name] is fly at [length]'

// MagicSquirrel
// -name(string) зробити setter&getter
// -color(string)
// -maxFlyLength(number)
// -words([string])
// -jump() // повертає рядок у вигляді '[name] is jump'
// -fly(length) // повертає рядок у вигляді '[name] is fly at [length]'
// -sayWords() // виводить в консоль масив слів, де кожне слово на окремому рядку

// створити екземпляр кожної білки, викликати на кожній білці усі доступні їй методи
// використати конструкцію try/catch

class Squirrel {
  /**
   *
   * @param {string} name
   * @param {string} color
   * @param {number} lenght
   */
  constructor(name, color, isJump = true) {
    this.name = name;
    this.color = color;
    this.isJump = isJump;
  }

  //getters & setters
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("name must be string");
    }
    this._name = name; //set private
  }

  jump() {
    return `${this._name} is Jump`;
  }
}

class FlySquirrel extends Squirrel {
  constructor(name, color, isJump, maxFlyLength = 100) {
    super(name, color, isJump);
    this.maxFlyLength = maxFlyLength;
  }

  fly(length) {
    if (length <= this.maxFlyLength) {
      return `${this._name} is fly at ${length}`;
    }
    throw new TypeError("distance must be <=100");
  }
}

class MagicSquirrel extends FlySquirrel {
  constructor(name, color, isJump, maxFlyLength = 100, words) {
    super(name, color, isJump, (maxFlyLength = 100));
    this.words = words;
  }

  sayWords() {
    console.log(this.words.split(" ")[0]);
  }
}

try {
  const mySquirrel = new Squirrel("Andrey", "orange", false);
  console.log(mySquirrel.jump());

  const maxFlySquirrel = new FlySquirrel("Xenia", "red", true);
  console.log(maxFlySquirrel.fly(67));
  const magSquirrel = new MagicSquirrel( "Jane", "white",true,50,"Good morning!" );
  magSquirrel.sayWords();
  console.log(magSquirrel.sayWords());
} catch (error) {
    console.log('Error')
}

//   //static
//   static isUserClasses(value){
//     return value instanceof UserClasses;
//   }
//   static getInstance(){
//     return new UserClasses('Test','Testik',44);
//   }
// }

// class Moderator extends UserClasses {
//     constructor(fname, lname, age, rating) {
//       super(fname, lname, age);
//       this.rating = rating;
//     }
//     applyMessage() {
//       return "apply message";
//     }
//   }

//   class Admin extends Moderator {
//     constructor(fname, lname, age, rating, propAdmin) {
//       super(fname, lname, age, rating);
//       this.propAdmin = propAdmin;
//     }
//     ban(user) {
//       if(UserClasses.isUserClasses(user)){
//         return user.isBan = true;
//       }
//       throw new TypeError('instance must be user')
//     }
//     unBan(user) {
//       if(UserClasses.isUserClasses(user)){
//         return user.isBan = false;
//       }
//       throw new TypeError('instance must be user')
//     }
//   }

//try {

//     console.log(moder.getFullName());
//     console.log(moder);
//     console.log(moder.applyMessage());
//     const admin = new Admin("Ad", "Admin", 22, 5.0, "red");
//     console.log(admin.getFullName());
//     const obj = {};
//     admin.ban(obj);
//     console.log(obj);
//     console.log(moder.isBan);
// } catch (error) {
//  console.log(error);
//   }

//console.log(Squirrel.name)

// Створити клас Товар з властивостями: назва, ціна, валюта, кількість,
// і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

// Створити дочірні класи Фізичний товар і Віртуальний товар, обидва походять від класу товар.
// У фізичного товара додається властивість вага.
// У віртуального товара додається властивість розмір пам'яті.


// class Product{
//     /**
//    *
//    * @param {string} name
//    * @param {number} price
//    * @param {string} currency
//    * @param {number} weight
//    * 
//    */
//   constructor(name, price, currency, howmuch){
//     this.name = name
//     this.price=price
//     this.currency=currency
//     this.howmuch=howmuch
//   }
//   getInfo(){
//     return `${this.name} ${this.price} ${this.currency} ${this.howmuch}`
//   }
//  getSumm(howmuch=1){
//     return this.price * this.howmuch
// }
// }

// class FizProduct extends Product{
//     constructor(name, price, currency, howmuch, weight){
//     super(name, price, currency, howmuch)
//        this.weight=weight
//     }
// }

// class VirtualProduct extends Product{
//     constructor(name, price, currency, howmuch, weight , memory){
//         super(name, price, currency, howmuch, weight)
//         this.memory=memory
// }
// }
// const myShoes = new Product('Gucci', 780,'$',2)
// console.log(myShoes.getInfo())

// const myFizicalproduct = new FizProduct('Shoesy', 550,'$',3,2)
// console.log(myFizicalproduct.getInfo())

// const myVirtProduct = new VirtualProduct('Bitkoin', 5679, '$', 67, 15, 13, 100000)
// console.log(myVirtProduct)




// class Figure{
//     constructor(name){
//         if (this.constructor === Figure){
//             throw new Error("You cannot create instance in abstract class");
//         }
//         this.name=name;
//     }
//     getSquare() {}
//     getPerimetr(){}
// }

// class Circle extends Figure{
//     constructor(diametr){
//         super('circle');
//         this.diametr=diametr
//     }
// set diametr(diametr){
//     if (typeof diametr !=='number'){
//         throw new TypeError ('Diametr must be number')
//     }
//     if (diametr <=0){
//         throw new RangeError('Diametr must be <=0')
//     }

// this._diametr = diametr;
// this._radius=diametr/2
// this._lenght = 2*Math.PI*(diametr / 2)
// }
//     get square(){
//         return 2*Math.PI*this._radius*this._radius;
//     }
//     getPerimetr(){
//         return 2*Math.PI*this._radius;
//     }
// }

// try {
//     const figure1=new Circle(10)
//     figure1._diametr=20
//     console.log(figure1 instanceof Circle);
//     console.log(figure1 instanceof Figure);
//     console.log(figure1 instanceof Object);
//     console.log(figure1.getSquare())
//     console.log(figure1.getPerimetr());
    
// } catch (error) {
//     console.log(error)
    
// }



"use strict";

// инкапсуляція (абстракція)
// + наслідування
// поліморфізм

class Figure {
  constructor(name) {
    if (this.constructor === Figure) {
      throw new Error("You cannot create instance in abstract class");
    }
    this.name = name;
  }
  getSquare() {}
  getPerimetr() {}
}

class Circle extends Figure {
  /**
   *
   * @param {number} diametr
   */
  constructor(diametr) {
    super("circle");
    this.diametr = diametr; //виклик setter
  }
  //инкапсуляція
  set diametr(diametr) {
    //перевірка діаметра
    if (typeof diametr !== "number") {
      throw new TypeError("Diametr must be number!");
    }
    if (diametr <= 0) {
      throw new RangeError("Diametr cannot be 0 or less");
    }
    this._diametr = diametr;
    this._radius = diametr / 2;
    this._length = 2 * Math.PI *(diametr / 2);
  }
  //поліморфізм
  getSquare() {
    return 2 * Math.PI * this._radius * this._radius;
  }
  getPerimetr() {
    return 2 * Math.PI * this._radius;
  }
}

class Square extends Figure {
    constructor(side){
        super('square')
        this.side=side
    }
    set side(side){
        if (typeof diametr !== "number") {
            throw new TypeError("Diametr must be number!");
          }
          if (diametr <= 0) {
            throw new RangeError("Diametr cannot be 0 or less");
    }
    this._side=side;
    this.diagonal=Math.sqrt(this._side*this._side*this._side*this.side)
}
getSquare(){
    return this._side*this._side
}
getPerimetr(){
    return 4* this._side;
}
}




try {
  const figure1 = new Circle(10);
  figure1.diametr = 20;
  //console.log(figure1);
  //console.log(figure1 instanceof Circle);//true
  //console.log(figure1 instanceof Figure);//true
  //console.log(figure1 instanceof Object);//true
  console.log(figure1.getSquare());
  console.log(figure1.getPerimetr());
} catch (error) {
  console.log(error);
}






