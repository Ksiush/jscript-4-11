// Людина вводить номер місяця, ви виводите пору року
// 1,2,12 - winter
// 3,4,5 - spring
// 6,7,8, - summer
// 9,10,11 - autumn
// 404 try again
// виконати 2 варіантами: через switch та if...else if...else
// --------------------


const numberOfSeasons = Number (prompt="Choose number of month:");
switch (numberOfSeasons) {
    case '1':
    case '2':
    case '12':
        console.log('winter') 
        break;
    case '3':
    case '4':
    case '5':
        console.log('spring') 
        break;
    case '6':
    case '7':
    case '8':
        console.log('summer') 
        break;
    case '9':
    case '10':
    case '11':
        console.log('autumn') 
        break;
    default:
        console.log ('try again')
        break;
}



    const numberOfSeasons1 = Number(prompt="Choose number of month:");
    if (numberOfSeasons1 ===1|| numberOfSeasons1===2|| numberOfSeasons1===12){
        console.log( 'winter');
    } 
    else if(numberOfSeasons1 ===3|| numberOfSeasons1=== 4 ||numberOfSeasons1=== 5){   
        console.log( 'spring');
    } 
    else if (numberOfSeasons1 ===6|| numberOfSeasons1=== 7 ||numberOfSeasons1=== 8){   
        console.log( 'summer');
    }
    else if (numberOfSeasons1 ===9|| numberOfSeasons1=== 10 ||numberOfSeasons1=== 11){   
        console.log( 'autumn');
    }
    else {
        console.log( '404 try again');
    }

    // ----------------------
    // Людина вводить годину([0-23]), ви виводите привітання
    // [7 - 11) - good morning
    // [11 - 18) - good day
    // [18 - 23) - good evening
    // усе інше - good night
    // усе невірне - 404 try again
    // виконати 2 варіантами: через switch та if...else if...else і скажете який краще!!!
    // // 


    // const userTime = prompt('Enter your time');
    // switch (true) {
    //     case (userTime<='6'):
    //         console.log('good night')
    //         break;
    //     case ((userTime>='7') && (userTime<'11')):
    //         console.log('good morning');
    //         break;
    //     case ((userTime>='11') && (userTime<'18')):
    //         console.log('good day');
    //         break;
    //     case ((userTime>='18') && (userTime<'23')):
    //         console.log('good evening');
    //         break;
    //     default:
    //         console.log('404 try again');
    //         break;
    // }

     
    const userTimes = prompt('Enter time');
    switch (userTimes) {
        case '0':
        case '1': 
        case '2': 
        case '3': 
        case '4': 
        case '5': 
        case '6':    
            console.log('good night');
            break;

        case '7':
        case '8':          
        case '9': 
        case '10':  
            console.log('good morning'); 
            break;

        case '11': 
        case '12': 
        case '13': 
        case '14': 
        case '15': 
        case '16': 
        case '17': 
            console.log('good day'); 
            break;
            
        case '18':
        case '19':  
        case '20': 
        case '21': 
        case '22': 
        case '23':
            console.log('good evening');
            break;         
        default:
            console.log('404 try again')    
            break;
    }


    // Людина вводить вік (привести до числа), ви виводите класифікацію за віком:
    // [0 - 2) baby
    // [2 - 6) kinder
    // [6 - 12) child
    // [12 - 18) teenager
    // [18 - 65) adult
    // [65 - 100) oldmen
    // [100 - 150) super!
    // 404 try again
    // оберіть самі потрібну конструкцію
    // ----------------------

    const userAge = Number (prompt ='Enter your age')

    if (userAge >= 0 && userAge <2){
        console.log('baby');
    }
    else if(userAge >=2 && userAge <6){
        console.log('kinder');
    }
    else if (userAge>=6 && userAge <12){
        console.log('child')
    }
    else if(userAge>=12 && userAge <18){
        console.log('teenager')
    }
    else if (userAge>=18 && userAge <65){
        console.log('adult')
    }
    else if (userAge>=65 && userAge <100){
        console.log('oldman')
    }
    else if (userAge>=100 && userAge <150){
        console.log('super!')
    }
    else{
        console.log('404 try again')
    }
