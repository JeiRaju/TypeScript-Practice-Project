"use strict";
function compare(n1, n2) {
    if (n1 > n2) {
        console.log("n1 is bigger");
    }
    else {
        console.log("n2 is bugger");
    }
}
compare(1, 2);
function concat(s1, s2) {
    console.log(s1 + s2);
}
concat("Hell0", "Hi");
// 1 < 2
// let flag: boolean = "ABC";
let flag = 1 < 2;
// let n: number = 12;
// console.log(n);
let s1 = Symbol("key1");
let s2 = Symbol("key2");
console.log(s1 === s2);
// explicit type assignment
// let n: number = 10;
let n;
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
    }
};
