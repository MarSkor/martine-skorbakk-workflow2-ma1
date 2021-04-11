"use strict";
// QUESTION 01
var arrayValues;
// QUESTION 02
var tup;
// QUESTION 03
function getFullName(firstName, lastName) {
    return firstName + "\u00A0" + lastName;
}
// QUESTION 05
var numericEnum;
(function (numericEnum) {
    numericEnum[numericEnum["Paid"] = 0] = "Paid";
    numericEnum[numericEnum["Unpaid"] = 1] = "Unpaid";
    numericEnum[numericEnum["Unknown"] = 2] = "Unknown";
})(numericEnum || (numericEnum = {}));
// QUESTION 06
var Person = /** @class */ (function () {
    function Person(nameString) {
        this.name = nameString;
    }
    Person.prototype.showName = function () {
        return "My name is " + this.name;
    };
    return Person;
}());
var personName = new Person("Marie");
var nameIs = personName.showName();
function getDetails(name, details) { }
