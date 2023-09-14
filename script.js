//MASYVAI - ARRAYS

let numsArray = [5, 500, -5, 57.5, 4543, 'du']
//               0    1   2   3      4     5

console.log(numsArray)
console.log(numsArray.length)


//Masyvo nariu pasiekimas(paemimas)

console.log(numsArray[0])
console.log(numsArray[1])
console.log(numsArray[2])
console.log(numsArray[3])
console.log(numsArray[4])
console.log(numsArray[5])


//pvz. kaip kombinuojasi masyvas su ciklu
for (let i = 0; i < numsArray.length; i++) {
    // console.log(i) // paduoda masyvo indeksus
    console.log(numsArray[i]) // paduoda masyvo narius
}

let newArr = ['vienas', 'Du', 'Du su puse', 5, true, [1, 2, 5]]
//              0          1        2       3    4       5
//                                                    0   1  2

console.log(newArr)
console.log(newArr[0])
console.log(newArr[1])
console.log(newArr[2])
console.log(newArr[3])
console.log(newArr[4])
console.log(newArr[5])
console.log(newArr[5][0])
console.log(newArr[5][1])
console.log(newArr[5][2])

console.log(newArr[1])
newArr[1] = 2

newArr[newArr.length] = 444 // taip galima i masyvo PABAIGA ideti masyvo nauja nari

console.log(newArr)
console.log(typeof newArr)


let cities = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai', 'Panevezys']
console.log(cities)

//pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalu masyva. 

//pop() metodas - pasalina is masyvo paskutini jo nari.

let lastCity = cities.pop()
console.log(lastCity)

cities.pop()

console.log(cities) // dabar jau masyvas be dvieju paskutiniu nariu, nes du kartus panaudotas pop metodas.

//shift() metodas - pasalina is masyvo pirma jo nari ir ji returnina.

let firstCity = cities.shift() //kintamojo kurti nebutina. bet galima, jei norima ji po to kazkur panaudoti.
console.log(firstCity)

console.log(cities)

//push() metodas - prideda nauja nari (narius) i masyvo PABAIGA.

let updatedCitiesLength = cities.push('Vilnius')
console.log(updatedCitiesLength)

cities.push('Siauliai')
cities.push('Kaunas', 'Panevezys')
console.log(cities)

//unshift() - metodas - prideda nauja nari (narius) i masyvo pradzia.
let updatedCitiesLength2 = cities.unshift('Nida')
console.log(updatedCitiesLength2)

cities.unshift('Taurage', 'Palanga')

console.log(cities)

//kaip 'susirankioti'masyvo narius is jo vidurio, pvz. nariai nuo 2 iki 9to.

let countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy']
//index             0           1         2           3         4         5
//Slice(+)    0             1         2          3        4           5        6
//Slice(-)   -6            -5        -4         -3       -2          -1      



//SLICE - nemutoja(nemodifikuoja) originalaus masyvo


console.log(countries)

let slicedCountries1 = countries.slice()
console.log(slicedCountries1)

let slicedCountries2 = countries.slice(0)
console.log(slicedCountries2)

let slicedCountries3 = countries.slice(2)
console.log(slicedCountries3)

let slicedCountries4 = countries.slice(2, 4)
console.log(slicedCountries4)

let slicedCountries5 = countries.slice(0, 3)
console.log(slicedCountries5)

let slicedCountries6 = countries.slice(-4)
console.log(slicedCountries6)

let slicedCountries7 = countries.slice(-4, -2)
console.log(slicedCountries7)

let slicedCountries8 = countries.slice(-4, 2)
console.log(slicedCountries8)

let slicedCountries9 = countries.slice(-3, -2)
console.log(slicedCountries9)

let slicedCountries10 = countries.slice(2, -2)
console.log(slicedCountries10)

let slicedCountries11 = countries.slice(-2, -4)
console.log(slicedCountries11)

let slicedCountries12 = countries.slice(4, 2)
console.log(slicedCountries12)


//SPLICE metodas - modifikuoja ir mutuoja originalu masyva

let nums = [ 1  ,  2  ,  3  ,  4  ,  5  ,  6  ,  7  ,  10 ]
//         0    1     2     3     4     5     6     7     8
//        -8   -7    -6     -5   -4    -3    -2     -1

console.log(nums)

// let splicedNums = nums.splice(2)
// let splicedNums = nums.splice(0, 2)
// let splicedNums = nums.splice(2, 1)
// let splicedNums = nums.splice(2, 3)
// let splicedNums = nums.splice(-1)
// let splicedNums = nums.splice(-3, 2)
// let splicedNums = nums.splice(-3, 2, 2)
// let splicedNums = nums.splice(3, 2, 'Trys')
// let splicedNums = nums.splice(2, 1, 2.5)
// let splicedNums = nums.splice(2, 0, 2.5)
let splicedNums = nums.splice(2, 0, 2.5, 2.8, 2.9)


console.log(splicedNums)
console.log(nums)


//FILTER

let originalNums = [ 1, 2, 3, 4 ,5 ,6 ,7 ,8, 10 ]

console.log(originalNums)

// originalNums.filter(function(element, index, array) { //f-ja iskviecia kiekviena masyvo nari
// console.log(element)
// console.log(index)
// console.log(array)
// })

let filteredNums = originalNums.filter(function(num) { 
    console.log(num)
    console.log(num > 5)

    return num > 5
 
    })

    console.log(filteredNums)

    let filteredNums2 = originalNums.filter(function(num) { 
    return num > 4 && num <= 8
     })
    
    console.log(filteredNums2)

    let filteredNums3 = originalNums.filter(function(num) { 
        if (num > 4 && num <= 8 && num % 2 === 0) {
            return true
        } else {
            return false
        }
         })
        
        console.log(filteredNums3)