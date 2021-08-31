// topic: keys, values, entries, delete, freeze

const bottle = {
    color: 'Yellow', 
    height: 19, 
    price:50, 
    isCleaned: true
};

// get just all property name using keys of an object
const allKeys = Object.keys(bottle);
// console.log(allKeys);

// get just all values of all property using values of an object
const allValues = Object.keys(bottle);
// console.log(allValues);

// get all value and its all property with pairs of an object
const getKyesValues = Object.entries(bottle);
// console.log(getKyesValues);

// using seal on an object // if i use seal on object, i cannot delete a property of an object, but i can change the value of a property and i can update a new property in object.
Object.seal(bottle);
// console.lof(bottle);

// delete one value of an object // if i want to delete a property of an object then i must use delete.
delete bottle.isCleaned;
// console.log(bottle);

// using freeze on an object // if i use freeze an object then i cannot change or delete exiting proprety or update a new property of an object.
Object.freeze(bottle);