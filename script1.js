//HW 5.1

const citiesAndCountries = {
	Kiev : 'Украина',
	NewYork : 'США',
	Amsterdam : 'Нидерланды',
	Berlin : 'Германия',
	Paris : 'Франция',
	Lissbone : 'Португалия',
	Viena : 'Австрия',
};

function getCity() {
    let res = [];
    for (let i = 0; i <= Object.keys(this).length; i++) {
            if(typeof(Object.values(this)[i]) !== 'function') {
            res.push(Object.getOwnPropertyNames(this)[i] + ' - это ' + Object.values(this)[i])
            }
    }
    res.splice(res.length - 1)
    return res
}

citiesAndCountries.info = getCity
//citiesAndCountries.info()

//HW 5.2

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay (lang, day) {
    index  = day -1;
    if (lang === 'ru') {
        console.log(namesOfDays.ru[index])
    } else if (lang === 'en') {
        console.log(namesOfDays.en[index])
    }
}

//getNameOfDay('en' , 1)

//HW 5.3 //HW 5.4

const person = {
    name: 'Vlad',
    setName : function (nameSet) {
        this.name = nameSet;
    },
    setAge : function (ageSet) {
        function ageValidation () {
            this.age = ageSet;
            if (this.age < 18) {
                this.age = 'Validation Error'
            } return ageSet
        }
        
        ageValidation()
    },
    getName : function () {
        return this.name
    },
    getAge : function () {
        return this.age
    },
};

const person1 = {
    age: 1 ,
    __proto__ : person
};

function setProto (currentObj, protoObj) {
    currentObj.__proto__ = protoObj
}

//5.3 setProto(person1, person)
//5.3 console.log(person1)

person1.setName('Bogdan') //5.4
person1.setAge(17) //5.4

console.log(person1)


