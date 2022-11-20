// 1 
function Shoes(name, price, currensy ,discount){
    this.name = name;
    this.price =price;
    this.currensy =currensy;
    this.discount = 50;
}
 Shoes.prototype.discounts=function(){
    if (this.price>100){
            this.price=this.price - this.discount;
            return this.price+this.currensy ;
        }
        return 'try again'
 }
 Shoes.prototype.info= function(){
    return `${this.name}, ${this.price}, ${this.currensy}`
 }
const gucci= new Shoes('gucci', 1000, '$');
const gacci= new Shoes('gacci', 100, '$');

// // 2

function Shoes(name, price, currensy, discount) {
  this.name = name;
  this.price = price;
  this.currensy = currensy;
  this.discount = 50;
  this.info = function () {
    return `${this.name}, ${this.price}, ${this.currensy}`;
  };
  this.addDiscounts = function () {
    if (this.price > 100) {
      this.price = this.price - this.discount;
      return this.price + this.currensy;
    }
    return "try again";
  };
}

// // 3
function Shoes(name, price, currensy ,discount){
         this.name = name;
         this.price =price;
         this.currensy =currensy;
         this.discount = 50;
     }
      Shoes.prototype.discounts =function(){
         if (this.price>100){
                 this.price=this.price - this.discount;
                return this.price+this.currensy ;
             }
           return 'try again'
      }
     const gucci= new Shoes('gucci', 1000, '$');
     const gacci= new Shoes('gacci', 100, '$');

//4

    const funcForShoes ={
      information: function(){
        console.log( this.name, this.price, this.currensy, this.discount)
      },
      discont: function(){
        if (this.price>100){
          this.price=this.price - this.discount;
         return this.price+this.currensy ;
      }
      }

    }

    const lab = {
      name: 'Lab',
      price: 560,
      currensy: '$',
      discount: 50,
    }

    lab.__proto__ = funcForShoes;
