
const Start_diapazon = 0;
const End_diapazon=50;
const enterNumber=function(Start_diapazon=0, End_diapazon=50){
    while(true) {
        const input = prompt('Enter a number');
    if(input !=='' && input!==' ' && input!==null){
        if(input>Start_diapazon && input<End_diapazon){
            return Number(input)

        }
    }
}
}
console.log(enterNumber(3,49))





function user (firstName, lastName, userAge){
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = userAge;
    this.fullName = function(){
        console.log(this.firstName + this.lastName)
    }
}

const name = new user ('Xenia', 'Golovach', 24);
console.log(name)
name.fullName()



