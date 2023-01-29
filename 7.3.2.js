function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const person = {
    name: "Svetlana",
       };


console.log(showProps(person, "city"));
console.log(showProps(person, "name"));

