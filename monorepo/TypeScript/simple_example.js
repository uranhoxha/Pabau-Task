"use strict";
exports.__esModule = true;
var first_intern = {
    Interns: [{
            name: "Uran",
            age: 19,
            skills: ["HTML", "CSS", "JavaScript"]
        }],
    Juniors: [],
    Country: "Kosova"
};
function greet() {
    console.log("Hello ".concat(first_intern.Interns[0].name, " from ").concat(first_intern.Country, "!"));
}
greet();
