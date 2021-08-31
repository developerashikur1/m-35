// when we use function of an object property, then it's called object method property.
const student={
    name: 'RJ Kibria',
    roll: 35,
    isRich:false,
    money:5000,
    mainSubject:'Mathmetics',
    primarySub:['Bangla', 'English', 'Islamic Itihas'],
    BestFriend:{
        name:'Sonia',
        roll: 12,
        mainSubject:'Mathemetic',
        primarySub:['Bangla', 'English', 'Islamic Itihas']
    },
    takeExam: function(){
    console.log(this.name, 'Taking Exam')
    },
    treatDe: function(treate, trip){
        this.money = this.money-treate;
        return this.money;
    }
};
student.takeExam();

const remaining1 = student.treatDe(2500, 100);
const remaining2 = student.treatDe(1000, 50);  
console.log(remaining1, remaining2);