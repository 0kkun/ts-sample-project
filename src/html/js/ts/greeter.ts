interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    )
    {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person: Person) {
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