"use strict";
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Jane", "M.", "User");
document.body.textContent += greeter(user);
// // class Human {
// //     name: string;
// //     constructor (initial: string) {
// //         this.name = initial;
// //     }
// //     greeting() {
// //         console.log(`Hello! My name is ${this.name}`);
// //     }
// // }
// // let test = new Human('Tom');
//# sourceMappingURL=greeter.js.map