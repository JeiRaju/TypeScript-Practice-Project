function compare(n1: number, n2: number) {
    if (n1 > n2) {
        console.log("n1 is bigger");
    } else {
        console.log("n2 is bugger");
    }
}

compare(1, 2);

function concat(s1: string, s2: string) {
    console.log(s1 + s2);
}

concat("Hell0", "Hi");
// 1 < 2

// let flag: boolean = "ABC";
let flag: boolean = 1 < 2;

// let n: number = 12;

// console.log(n);

let s1 = Symbol("key1")
let s2 = Symbol("key2")

console.log(s1 === s2)

// explicit type assignment
// let n: number = 10;

let n: any;

n = 10;
n = "ABC";

// Objects
// let emp: {
//     empName: string;
//     companyName: string;
//     salary?: 1000;
//     address: {
//         city: string,
//         area: string,
//         country: string,
//     }
// } = {
//     empName: "Navin",
//     companyName: "ABC",
//     salary: 1000,
//     address: {
//         city: "Colombo",
//         area: "Bamba",
//         country: "Sri Lanka",
//     }
// };

// emp.companyName = "XYZ";
// emp.empName = "Navin R";

// console.log(emp.empName);

let emp = {
    empName: "Navin",
    companyName: "ABC",
    salary: 1000,
    address: {
        city: "Colombo",
        area: "Bamba",
        country: "Sri Lanka",
    },
    display: function() {
        console.log("Hi my name is " + this.empName + ". I work at " + this.companyName + " & I am from " + this.address.country);
    },
};

emp.display();

// array

let numbers: number[] = [1, 2, 3, 4];

// If you want to create an array that you know will not change at all and want to remove all capabilities of the array being manipulated.
// let numbers: readonly number[] = [1, 2, 3, 4];

numbers.push(5);

let updatedNumbers1 = numbers.filter((n) => n > 2);
let updatedNumbers2 = numbers.map((n) => n * n);

console.log(numbers);
console.log(updatedNumbers1);
console.log(updatedNumbers2);

for(let i = 0; 1 < 4; i++) {
    console.log(numbers[i]);
}
// reading an unpresent element in the list will give the output as undefined instead of giving an error

numbers.forEach(n => {
    console.log(n);
})


// This can be written as -
let emp1 = {
    empName: "Navin",
    salary: 1000,
};

let emp2 = {
    empName: "Pravin",
    salary: 1500,
}; 

// this
let listOfEmployee = [
    {
        empName: "Navin",
        salary: 1000,
    },
    {
        empName: "Pravin",
        salary: 1500,
    },
    {
        empName: "shakile",
        salary: 1500,
    },
]

console.log(listOfEmployee);

let array = new Array(1,2)

let listOfEmpUpdated = listOfEmployee.filter
let listOfEmpName: string[] = listOfEmployee.map((ob) => ob.empName);
console.log(listOfEmpUpdated);

// Union Types
let y : number | string = "ABC";

function display(param: string) {
    console.log(param);
}

display("ABC");
// since the parameter is configured for string this number input will not be accepted by typescript
// display(123);

enum LogLevel {
    ERROR,
    INFO, 
    WARNING
}

enum HttpStatus {
    BADREQUEST = 400,
    INTERNALSERVERERROR = 500,
}

enum Directions {
    UP = "Up",
    DOWN = "Down",
}

console.log(LogLevel.ERROR);
console.log(LogLevel.INFO);
console.log(LogLevel.WARNING);

function displayLog (logLevel: LogLevel, message:string) {
    if (logLevel === LogLevel.ERROR) {
        console.log("ERROR : " + message);
    } else if (logLevel === LogLevel.INFO) {
        console.log("INFO : " + message);        
    } else if (logLevel === LogLevel.WARNING) {
        console.log("WARNING : " + message);
    }
}

displayLog(LogLevel.INFO, "All good");
displayLog(LogLevel.ERROR, "Array index issue");
displayLog(LogLevel.WARNING, "All code path not covered");

// Magic of let
// Var, let, const
// var is global scoped
// let is local scoped
// const is immutable

var a = 10;

if (true) {
    // Business logic
    var a = 11;
    // 
}

console.log(a);

// let in detail

let b = 10;

function fun1() {
    let b = 11;
}
fun1();
console.log(b);

// tuples
let t = [1, "ABC"]

function display1(pair:[string, number]) {
    console.log("Name : " + empName);
    console.log("Id : " + empid);
}


display1([Navin, 1]);

// aliases
type EmpId = num;

let id1: EmpId = 10;
let id2: EmpId = 20;


let id: number = 10;