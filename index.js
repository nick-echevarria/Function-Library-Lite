// Array
const numbers = [2, 3, 8, 9, 12]

//Callback function 1
function multiplyNumber(number) {
    return number * 3;
}

//Callback function 2
function checkNumber(number) {
    if (number % 2 == 0) {
        return true
    } else {
    }
}

//Callback function 3
function sumNumbers(total) {
    total
}

//myEach 
function myEach(array, callback){
    for(let i = 0; i < array.length; i++){
      const element = array[i]
      return callback(element)
    }
  }


//myMap
function myMap(array, callback) {
    newArray = []
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        newArray.push(callback(element))
    }
    return newArray
}

//myFilter 
function myFilter(array, callback) {
    newArray = [];
    for (let i = 0; i< array.length; i++) {
        let element = array[i]; 
        if (callback(element) === true) {
            newArray.push(element);
    }
    }
    return newArray
}

//myFind
function myFind(array, callback) {
    for (let i = 0; i< array.length; i++) {
        let element = array[i]; 
        if (callback(element) === true) {
            return element
    }
    }    
}

//myReduce 
// function myReduce (array, callback, )
