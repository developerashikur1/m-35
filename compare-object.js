// there are may many different kind of compare object
// when we compare in many object, then compare them referential integrity
const first = {a:1, b:2};
const second = {a:1, b:2};
const third = first;


// if (first === second){
if(first===third){
    console.log('they are equal');
}
else{
    console.log('they are different')
};


