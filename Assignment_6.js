//Question - 1
// let person = {
//     name: "Martin Garrix",
//     age: 24,
//     occupation: "Terrorist",
// };
// function printPersonDetails(person) {
//     console.log("Name:", person.name);
//     console.log("Age:", person.age);
//     console.log("Occupation:", person.occupation);
// }
// printPersonDetails(person);
// function updateProperty(person, propertyName, newValue) {
//     if (person.hasOwnProperty(propertyName)) {
//     person[propertyName] = newValue;
//     console.log("Updated", propertyName, "is", newValue);
//     } else {
//     console.log("Sorry", propertyName, "doesn't exist in the person object.");
//     }
// }
// updateProperty(person, "age", 35);
// function addProperty(person, propertyName, value) {
//     person[propertyName] = value;
//     console.log("Added new property", propertyName, "with value:", value);
// }

// addProperty(person, "hobbies", ["Reading", "Hiking", "Coding"]);
// printPersonDetails(person);


//Question - 4
// let student = {
//     name: "Your name",
//     age: 22,
//     numbers: [89, 76, 56],
//     calculateAverage: function() {
//         let sum = this.numbers.reduce((acc, num) => acc + num);
//         let average = sum / this.numbers.length;
//         return average;
//     }
// };
// let studentAverage = student.calculateAverage();  
// console.log("The average is:", studentAverage);