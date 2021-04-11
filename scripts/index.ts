
// QUESTION 01
let arrayValues: (number | boolean)[];


// QUESTION 02
let tup: [string, number, boolean];

// QUESTION 03
function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

// QUESTION 04
interface randomPerson {
    name: string;
    age: number;
    jobTitle: string;
}

// QUESTION 05
enum numericEnum {
    Paid,
    Unpaid,
    Unknown
}

// QUESTION 06
class Person{
    name: string;

    constructor(nameString: string){
        this.name = nameString
    }

    showName(){
        return "My name is " + this.name
    }

}

const personName = new Person("Marie");
const nameIs = personName.showName();
// console.log(nameIs);


// QUESTION 07
type NameAlias = string | boolean;
type DetailAlias = { id: number | string, status: string | boolean }

function getDetails(name: NameAlias, details: DetailAlias ){}

