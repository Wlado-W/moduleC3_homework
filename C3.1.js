
function printOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

const myObject = {
    name: "Юлия",
    age: 30,
    gender: "Женский"
};

printOwnProperties(myObject);