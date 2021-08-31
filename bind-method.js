const student={
    name: 'RJ Kibria',
    money:5000,
    mainSubject:'Mathmetics',
    treatDe: function(treate){
        this.money = this.money-treate;
        console.log(this);
        return this.money;
    }
};

const heroAlom = {
    name: 'Hero Alam',
    money: 6000,
    mainSubject:'Mathmetics',
};

const heroAlomThe = student.treatDe.bind(heroAlom);
heroAlomThe(100);
heroAlomThe(4400)

student.treatDe(1000);

const rohit = {
    name: 'rohit',
    money: 4500,
    mainSubject:'Mathmetics',
};

const rohitDe = student.treatDe.bind(rohit);
rohitDe(4000);