function createEmptyObject() {
    return Object.create(null);
}
const myObject = createEmptyObject();

console.log(myObject); // {}
console.log(Object.getPrototypeOf(myObject)); // null
