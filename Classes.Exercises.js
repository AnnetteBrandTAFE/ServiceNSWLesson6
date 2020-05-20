// Q1 Create a class called Pet

//class Pet {

//}

// Q2 Give the class 3 properties called givenName, age and ownerId

//class Pet {
//    givenName;
//    age;
//    ownerId;

//}

// Q3 Create a constructor that assigns the 3 properties above

//class Pet {
//    constructor (givenName, age, ownerId) {
//        this.givenName = givenName;
//        this.age = age;
//        this.ownerId = ownerId;
//}
//}


// Q4 Create a class called Owner with 3 properties: givenName, familyName and id

// class Owner {
//    givenName;
//    familyName;
//    id;

// }

// Q5 Create a constructor for the Owner class that assigns the values above.

// class Owner {
//    constructor (givenName, familyName, ownerId) {
//        this.givenName = givenName;
//        this.familyName = familyName;
//        this.ownerId = ownerId;
//    }
//   }
// let me = new Owner("Annette", "Brand", 50)
// console.log(me.familyName); // Output: Brand

// Q6 Create a method in the class Owner called getFullName that takes no arguments and returns the full name of the owner

// class Owner {
//    constructor (givenName, familyName, id){
//    this.givenName = givenName;
//    this.familyName = familyName;
//    this.id = id;
// }
// getFullName() {
//    return `${this.givenName} ${this.familyName}`;
// }
// }
// let owners = [
//    new Owner("luke", "Parker", 22),
//    new Owner("Annette", "Brand", 15),
//    new Owner("Dan", "Gow", 20)
// ];
// for (let i = 0; i < owners.length; i++) {
//     let theOwner = owners[i];
//     console.log(theOwner.getFullName());
// }
// Output:
// luke Parker
// Annette Brand
// Dan Gow

// Q7 Create a static method in the class Pet called getOwnerById that takes 2 arguments, 
// the first should be a pet object and the second should be an array of owners. 
// The function should return the full name of the owner with an id matching the ownerId of the pet 
// or else return an error message.
// class Pet {
//     constructor(givenName, age, ownerId) {
//         this.givenName = givenName;
//         this.age = age;
//         this.ownerId = ownerId;
//     }

//     static getOwnerById(pet, owners) {
//         let foundOwner = owners.find(function (owner) {
//             return owner.id == pet.ownerId;
//         });

//         if (!foundOwner) {
//             return "ERROR: Owner not found";
//         }
//         return foundOwner.getFullName();
//     }
// }
// let owners = [
//     new Owner("Luke", "Parker", 12),
//     new Owner("Dan", "Williams", 13),
//     new Owner("Sally", "Jones", 19)
// ];
// let myPet = new Pet("Rex", 4, 12);
// console.log(myPet.getOwnerById());

// Q8 Create a class called Square with a single property, sideLength and create a constructor 
// hat assigns that value

// class Square {
//     constructor (sideLength) {
//         this.sideLength = sideLength;
//     }

// Q9 Create a getter that returns the area of the Square (hint, the area is sideLength * sideLength)

// class Square {
//     constructor (sideLength) {
//         this.sideLength = sideLength;
//     }
//     get area(){
//         return this.sideLength ** 2;
//     }
    
// Q10 a setter for area that sets the sideLength for the given area (hint, use the Math.sqrt 
// function to retrieve the square root of the area and assign it as the sideLength)

class Square {
    constructor (sideLength) {
        this.sideLength = sideLength;
    }
    get area(){
        return this.sideLength ** 2;
    }
}
let squ = new Square(10)
console.log(squ.area); //Output: 100
    
