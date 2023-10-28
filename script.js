const person = {
    hair : 'brown',
    eyes : 'blue',
    a: 1,
    b: 2,
    c: 3
}

const valObject0 = {
    values: [1, '2', 4, 8, '8',  3, 10, null, false],
   };

//HW 3.5 (add: new property to object)
const addProp = (key, value, obj) => {
    for (let prop in obj) {
        if (prop === value) console.log('Already Exists')
    else {
        obj[key] = value
        }
    }
}

//??//HW 4.1 (add: new function to return function with context)
function contextFunc (value) {
    console.log(this[value])
}
function bindFunc (func, context, ...args) {
    for (let item of args) {
        func.call(context, item)
    }
}

//HW 4.2 (add: method to find sum of values)
function countValues () {
    const arr = Object.values(this);
    let sum = 0;
        for(let item of arr) {
            if(typeof(item) === 'number') {
            sum += item;
            }
        }
    console.log('Sum of elements: ' + sum)
}
person.count = countValues
//person.count()

//HW 4.3 (add: function to get filtered array from values)
function getNewArray () {
    let res = [];
    let finalRes = [];
    Object.values(this).forEach((item) => {
            if (typeof(item) === 'object') res.push(item)
        }
    )
        res.forEach((item) => {
            item.forEach((element) => {
                if(typeof(element) === 'number' && element % 2 === 0 && 2 < element < 10) finalRes.push(element)
                }
            )
        }
    )
    return finalRes
}
valObject0.new = getNewArray
//valObject0.new()