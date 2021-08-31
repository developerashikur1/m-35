// there are many different kinds of loop:
const bottle = {
    color: 'Yellow', 
    height: 19, 
    price:50, 
    isCleaned: true
};



// simple for loop
for(let i=0; i<10; i++){};

// for of loop // this loop is recommend for just array
for (const people of peoples){};

// for in loop // this loop is recommend for just object
for (const peop of bottle){
    // console.log(peop);
};

// (advanced) for of loop in object with entries and array distruction

/* // this is happenig in the array
const objects=Object.entries(bottle);
const [keys, values] = ['color', 'Yellow']
 */

for (const [keys, values] of Object.entries(bottle)){
    // console.log(keys, values);
};