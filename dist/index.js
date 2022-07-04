"use strict";
let sales = 123456789;
let course_name = 'nalinda';
let is_published = true;
let level;
function fetchCourse(title) {
    console.log(title);
}
fetchCourse("Maths");
let jsArray = [1, 2, '3'];
let tsArray = [1, 2, 3];
let user = [1, 'nalinda'];
console.log(user[1].toUpperCase());
var Size2;
(function (Size2) {
    Size2[Size2["Small"] = 1] = "Small";
    Size2[Size2["Medium"] = 2] = "Medium";
    Size2[Size2["Large"] = 3] = "Large";
})(Size2 || (Size2 = {}));
var Size3;
(function (Size3) {
    Size3["Small"] = "s";
    Size3["Medium"] = "m";
    Size3["Large"] = "l";
})(Size3 || (Size3 = {}));
let mySize = 1;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2022);
calculateTax(10000);
let employee1;
let employee2 = { id: 1, name: 'Nalinda' };
let employee3 = {
    id: 1,
    name: 'Nalinda',
    retire(date) {
        console.log(date);
    },
};
let employee4 = {
    id: 1,
    name: 'Nalinda',
    retire(date) {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 1.1;
    }
    else {
        return parseInt(weight) * 1.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity1 = 50;
let quantity2 = 50;
function greetings(name) {
    if (name) {
        console.log(name);
    }
    else {
        console.log('Hola!');
    }
}
greetings('Nalinda');
greetings(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let log1 = (message) => console.log(message);
let log2 = null;
log1('Nalinda');
log2 === null || log2 === void 0 ? void 0 : log2('Abc');
//# sourceMappingURL=index.js.map