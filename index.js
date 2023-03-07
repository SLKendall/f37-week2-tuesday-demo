let person = {
    firstName: "Chandler",
    lastName: "Bing",
    age: 34
}

// console.log(person.firstName)
// console.log(person['firstName'])

let meal = {
    appetizer: "fried pickles",
    entree: "millionaire burger",
    dessert: "root beer float",
    drink: "shiner bock",
}

const {dessert} = meal

// console.log(dessert)

let {drink:bestDrinkEver, appetizer, entree} = meal
// console.log(appetizer, bestDrinkEver, entree)

// for (let key in meal) {
//     console.log(`For my ${key} I had ${meal[key]}`)
// }

// person.job = "fuckboy"
person.job = "Statistical Analysis and Data Reconfiguration"

person.pets = [`Duck`, `Chicken`]

// console.log(person)
// console.log(person.pets[0])

delete meal.dessert




//Classes
class Pet {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Dog extends Pet {
    constructor(name,age,breed){
        super(name, age)

        this.breed = breed
    }

    bark() {
        console.log(`Bark! My name is ${this.name}!`)
    }

}


let edo = new Dog("Edo", 4, "mutt" )

console.log(edo)

edo.bark()