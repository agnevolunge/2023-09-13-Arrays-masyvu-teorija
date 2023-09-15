// Iprasta funkcija

function func1() {
    return 2 + 2
}

console.log(func1())


// Iprasta funkcija su parametrais

function func2(num1, num2) {
    return num1 + num2
}

console.log(func2(5, 5))

// Sukuriamas kintamasis ir jam kaip reiksme priskiriama anonimine funkcija

let func3 = function(num1, num2) { //anonimine funkcija, t.y. f-ja, kuri neturi vardo/pavadinimo
    return num1 + num2
}
console.log(func3(5, 8))


//ARROW FUNCTION: 
// 1. Sukurti kintamaji
// 2. Priskirti reiksme: 
//  2.1. Paprasti skliaustai ()
//  2.2. Rodykle =>
//  2.3. Riestiniai skliaustai {}

let arrowFunc1 = () => { //tarp riestiniu skliaustu rasome tai, ka funkcija turi daryti
    return 3 + 3
}
console.log(arrowFunc1())

let arrowFunc2 = (num1 + num2) => {
    return num1 * num2
}
console.log(arrowFunc2(3, 3))

let arrowFunc3 = (num) => {
    return num * num
}
console.log(arrowFunc3(5))

//Jeigu funkcijos veiksmas aprasomas vienoje eiluteje (arba funkcija grazina reiksme), tai galima nerasyti zodelio return ir riestiniu skliaustu.

let arrowFunc5 = num => num * num
console.log(arrowFunc5(5))


let nums = [1, 3, 5, 7, 9, 15]

// let filteredNums = nums.filter(function(num) {
// return num > 5   
// })

let filteredNums = nums.filter(num => num > 5)
console.log(filteredNums)

let mapNums = nums.map(num => num * num)
console.log(mapNums)