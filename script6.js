//HW 6.1

function AnimalNew (name, age, colour) {
    this.name = name;
    this.age = age;
    this.colour = colour;
}

function Animal (name, age, colour) {
   let obj = {};
   obj.name = name;
   obj.age = age;
   obj.colour = colour;
   return obj
}

const rabbit  = Animal('Rabbit', 2, 'White')
const rabbitNew = new AnimalNew('Rabbit', 2, 'White')
//console.log(rabbit)
//console.log(rabbitNew)

//HW 6.2

function Calculator () {

    this.read = function () {
        const a = prompt('Введите первое число');
        this.a = a - 0;
        const b = prompt('Введите второе число');
        this.b = b - 0;
    };

    this.setAction = function () {
        const action = prompt('Какое действие вы хотите совершить?');
        this.action = action;
    };

    this.doAction = function () {
        if (this.action === '+') {
            return this.sum()
        } else if (this.action === '-') {
            return this.min()
        } else if (this.action === '*') {
            return this.mul()
        } else if (this.action === '/') {
            return this.div()
        }
        return 'Неверное значение операции'
    };

    this.sum = function () {
        return this.a + this.b
    };

    this.mul = function () {
        return this.a * this.b
    };

    this.min = function () {
        return this.a - this.b
    };

    this.div = function () {
        return this.a / this.b
    };

}

//const calc = new Calculator

//HW 6.3

function Nums (...nums) {
    this.args = nums;
}
    getS = function () {
        return this.args.reduce((item1, item2) => {
            return item1 + item2
        })
        
    }
    
    myFR = function (){
        return this.args.reduce((item1, item2) => {
            if (Number.isInteger(item2)) {
                item1.unshift(item2)
            }
            return item1
        }, [])
    }

Nums.prototype.getSum = getS;
Nums.prototype.myFilterReverse = myFR;



const row = new Nums(1,2,3,4.5,5,6,7)

//row.getSum()
//row.myFilterReverse()

//HW 6.4

const arr = [1,2,4,5,6,6,6,5,4]

function unique() {
    return this.reduce((item1, item2) => {
        if (!item1.includes(item2)) {
            item1.push(item2)
        }
        return item1
    }, [])
}

Array.prototype.getUnique = unique;

//arr.getUnique()

//HW 6.5 ??

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};

function gKS () {
    const arr = Object.values(this)
    return arr.reduce((item1, item2) => {
        return item1 + item2
    })
}

function revK () {
    const keys = Object.keys(this)
    const values = Object.values(this)

    for (let i = 0; i < keys.length ; i++){
        this[values[i]] = keys[i]
        delete this[keys[i]]
    }
    
    console.log(this);
}

Object.prototype.getKeySum = gKS
Object.prototype.reversKey = revK

//obj.getKeySum()
obj.reversKey()



