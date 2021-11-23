'use strict';

// 1. isHometown

// Define your function here
// const is_hometown = (town) =>{
//     if (town === "San Francisco") {
//         return true;
//     } else {
//         return false;
//     }
// }

const isHometown = town => town === "San Francisco";

// console.log(is_hometown("San Francisco"))

// 2. getFullName

// const getFullName = (firstName, lastName) => {
//     return `${firstName} ${lastName}`;
// }

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// console.log(getFullName("Renee", "Lee"))

// 3. calculateTotal
const calculateTotal = (basePrice, state, tax=0.05) => {
    const subtotal = basePrice * (1 + tax);
    let fee = 0;
    if (state === "CA") {
        fee = 0.03 * subtotal;
    } else if (state === "PA") {
        fee = 2;
    } else if (state === "MA") {
        if (basePrice <= 100) {
            fee = 1;
        } else {
            fee = 3;
        }
    }
    return subtotal + fee
}

// console.log(calculateTotal(3, "PA"))

