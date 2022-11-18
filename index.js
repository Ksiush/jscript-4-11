


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

