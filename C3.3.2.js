function checkPropertyExistence(str, obj) {
    return obj.hasOwnProperty(str);
}
const myObject = {
    name: "30",
    age: 30,
    gender: "Женский"
};

console.log(checkPropertyExistence("age", myObject)); // true
console.log(checkPropertyExistence("address", myObject)); // false
