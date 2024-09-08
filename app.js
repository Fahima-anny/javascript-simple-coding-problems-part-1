function inchToFeet(inch){
    const feet = inch / 12 ;
    return feet ;
}
let height = inchToFeet(75)
// console.log(height)

function inchToHeight2(inch){
    let feetInt = parseInt(inch / 12) ;
    let inchFraction = inch % 12 ;
    return `Height: ${feetInt}ft. ${inchFraction}inch.` 
}
let height2 = inchToHeight2(75)
// console.log(height2)


function mileToKilometer(mile){
let km = mile * 1.60934 ;
return km ;
}
let mile = 20 ;
let mileToKm = mileToKilometer(mile)
// console.log(mileToKm)



function isLeap(year){
    if( (year%100 !== 0 && year%4 === 0) || (year%400 === 0) ){
        return true ;
    }
    // else if(year % 400 === 0){
    //     return true ;
    // }
    else{
        return false ;
    }
}
let leap1 = isLeap(2052)
// console.log(leap1)
let leap2 = isLeap(1900)
// console.log(leap2)


function evenSum(array){
    let evenArray = []
    for(let arr of array){
        if(arr%2 !==1){
evenArray.push(arr)
        }
    }
    let sum = 0 ;
    for(let arr of evenArray){
        sum = sum + arr ;
    }
    // console.log(evenArray)
    let totalEle = evenArray.length
    let avg = sum / totalEle ;
    return avg ;
}
let array = [2,1,3,5,4]
let evenArraySum = evenSum(array)
// console.log(evenArraySum)


function removeDuplicate(array){
    let uniqueArray = []
for(let x of array){
    if(!uniqueArray.includes(x)){
        uniqueArray.push(x)
    }
}
return uniqueArray
}
let duplicateArray = [ 2,3,4,2,3,4,3,2,2,5,6,4,5 ]
let newArray = removeDuplicate(duplicateArray)
// console.log(newArray)                                                         


let date = new Date()
// console.log(date)

let futureDate = new Date('2050-9-13')
// console.log(futureDate)

// console.log(date.getDate())
// console.log(date.getMonth())

let specificDate = new Date(2001, 10, 9)
// specificDate.setMonth(11)
// specificDate.setDate(2)
// console.log(specificDate)
// console.log(specificDate.toLocaleString('en-PK'))


function celsiusToFahrenheit(celsius){
    let fahrenheit = ( (9/5) * celsius ) + 32 ;
    return fahrenheit.toFixed(2) ;
}
let celsius = 94 ;
let celsiusToFahrenheitConvert = celsiusToFahrenheit(celsius)
// console.log(celsiusToFahrenheitConvert)



function countReps(array,find){
let findNum = 0 ;
for(const ar of array){
    // console.log(ar)
    if(ar === find){
        findNum++ ;
    }
}
return findNum
}
let repeatedArray = [5,6,11,12,98,5] ;
// let find = 5 ;
let find = 5 ;
let countNum = countReps(repeatedArray,find) ;
// console.log(countNum) ;



function countVowels(str){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0
    let lowerCaseStr = str.toLowerCase()
   for(const char of lowerCaseStr){
    // console.log(char)
    if(vowels.includes(char)){
        counter++
    }
   }
   return counter ;
}
let string = 'FARUK' ;
let vowelCounter = countVowels(string) ;
// console.log(vowelCounter)



function longestNumber(string){
let lowerStr = string.toLowerCase() ;
let slicedStr = lowerStr.split(" ")
let longestChar = slicedStr[0]
for(let x of slicedStr){
    if(x.length > longestChar.length){
        longestChar = x ;
    }
}
    return longestChar
}
let stringSentence = 'I am learning Programming to become a programmer' ;
let lognChar = longestNumber(stringSentence) ;
// console.log(lognChar)



function gen(){
    let number = Math.round(Math.random() * 10 ) + 10 ;
    return number ;
}

// console.log(gen()) ;


function gen100to200(){
    let number = Math.round(Math.random() * 100) + 100 ;
    return number ;
}
// console.log(gen100to200())

function gen1to5(){
    let num = Math.round(Math.random() * 4) + 1 ;
    return num
}
// console.log(gen1to5())


function findLowest(array){
    let lowest = array[0]
    for(const x of array){
        if(x < lowest){
            lowest = x ;
        }
    }
    return lowest ;
}
let arrayLow = [167, 190, 120, 165, 137,1] ;
let lowestOfArray = findLowest(arrayLow) ;
// console.log(lowestOfArray) ;



function findSmallest(array){
    let smallest = array[0] ;
    for(const x of array){
        if(x.length < smallest.length){
            smallest = x ;
        }
    }
    return smallest ;
}
let nameArray = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallestName = findSmallest(nameArray) ;
// console.log(smallestName)



function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){
    let laptopPrice = 35000 ;
    let tabletPrice = 15000 ;
    let mobilePrice = 20000 ;
    let bill = (laptopPrice*laptopQuantity) + (tabletPrice*tabletQuantity) + (mobilePrice*mobileQuantity) ;
    return bill ;
}
let bill = calculateElectronicsBudget(1, 1, 1)
// console.log(bill)




function findAveragePhonePrice(phones){
    let sum = 0 ;
    for(const phone of phones){
        // console.log(phone.price)
        sum = sum + phone.price ;
    }
    let avg = sum / phones.length ;
    return avg.toFixed(2) ;
}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
let phoneAverage = findAveragePhonePrice(phones) ;
// console.log(phoneAverage) ;



function salary(array){
    let totalSalary = 0 ;
for(let ar of array){
    // console.log(ar)
    let salary = ar.starting + ( ar.experience * ar.increment )
    totalSalary = totalSalary + salary ;
    // console.log(ar.starting , ar.experience , ar.increment )
}
return totalSalary ;
}
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
let totalSalary = salary(employees) ;
console.log(totalSalary) ;






