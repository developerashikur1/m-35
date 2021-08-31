// difference ways to create object 

// 1. object literal
const student={name:'sakib', job:'cricketer'};
// console.log(student);

// 2. object constructor
const person=new Object(sudent) // hare in this bracket we must use another object. otherweise it wil not work. this called prototype object. it's cannot work withwout his fathers property. hahahaha
// console.log(student);
// console.log(student.job)

// 3. class object
class People{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
}
const peop=new People('abdul kader', 34);
// console.log(peop);

// function object 
function Manus(name){
this.name=name;
}
const man=new Manus('selim');
console.log(man);