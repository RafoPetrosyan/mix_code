/*
        task 2 - > grel funkcia vory kstana tiv ev verjum kveradarcni kent ev
        zuyg tveri masiv, vochmi depkum tivy chpetke darcnel string.
*/



const filterNumber = (number) => {
        let odd = [];
        let two = [];
        let num = 0;

        while (number > 0) {
                num = number % 10;
                num % 2 === 0 ? two.push(num) : odd.push(num);
                number = Math.trunc(number / 10);
        }
        return [odd, two];
};

console.log(filterNumber(54287));

/*
        task 3 - > let str = ['A', 'd', 'F', 'a', 'Q', 'p', 'D', 'l', 's', 'w', 'X', 'c']
        - grvel funkcia vory knduni vorpes argument array ev kveradarcni arrai miji menak mecatarov tarery

*/

let str = ['A', 'd', 'dddddFddd', 'a', 'Qjhbhjk', 'p', 'D', 'l', 's', 'w', 'X', 'c'];


const filterUpperCase = (arr) => {

        let upperCaseArr = [];

        for (let i = 0; i < arr.length; i++) {
                for(let j = 0; j < arr[i].length; j++){
                        if (arr[i][j].charCodeAt() >= 65 && arr[i][j].charCodeAt() <= 90) {
                                upperCaseArr = [...upperCaseArr, arr[i]];
                        }
                }
        }
        return upperCaseArr;
};

console.log(filterUpperCase(str));






/*
        task 4 - > let numbers = [1, 2, 3, 6, 5, 4, 5, 754, 55, 4545, 55, 454, 54, 5]
        grel funkcia vory knduni array ev kveradarcni ammenamec tivy ( aranc ogtagorcelu arrayi methodneri )

*/

let numbers = [1, 2, 3, 6, 5, 4, 5, 754, 55, 4545, 455, 55, 454, 54, 5, -5];

const getMaxNumber = (arr) => {
        let maxNumber = 0;

        for (let i = 0; i < arr.length; i++) {

                if (arr[i] > maxNumber) {
                        maxNumber = arr[i];
                }

        }
        return maxNumber;
}

console.log(getMaxNumber(numbers));
/*
        task 5 - > let numbers = [1, 2, 3, 6, 5, 4, 5, 754, 55, 4545, 55, 454, 54, 5]
        grel funkcia vory knduni array ev kveradarcni ammenapoqr tivy ( aranc ogtagorcelu arrayi methodneri )
*/


const getMinNumber = (arr) => {
        let minNumber = 0;
        for (let i = 0; i < arr.length; i++) {

                if (arr[i] < minNumber) {
                        minNumber = arr[i];
                }

        }
        return minNumber;
}

console.log(getMinNumber(numbers));


var array = [6, 230, true, 'Mike', 731, false, "John", -17, -31];

function cFilter(arr, func) {
        if (!Array.isArray(arr) || typeof func !== 'function') {
                console.error('invalid params!');
                return null;
        }
        var result = [];
        for (var index in array) {
                if (func === true) {
                        func(array[index], index, arr);
                        result = array[index];
                }
        }
        return result;
}
console.log(cFilter(array, function fun(array, i) {
    for (var index in array) {
        if (array[index] >= 25) {
        fun(index, array[index], array);
        console.log(index + ": " + array[index]);
        return true;
    } else {
        console.error('Invalid params!');
        return false;
    }}}));


var arr = [6, 230, true, 'Mike', 731, false, "John", -17, -31];

function filter(arr, confirmFunction, maxValue) {
    var result = [];
    for(var i = 0; i < arr.length; i++){
       if(typeof arr[i] === 'number' && confirmFunction(arr[i], maxValue)) {
           result[result.length] = arr[i];
       }
     }
    return result;
}

function confirmFunction (number, maxValue) {
   return number >= maxValue;
}

console.log(filter(arr, confirmFunction, 25));

const arr = [6, 230, true, 'Mike', 731, false, "John", -17, -31];

const result = arr.filter(item => typeof item === 'number' && item > 25);
console.log(result)


var arr = [6, 230, true, 'Mike', 731, false, "John", -17, -31];

function filter(arr, maxValue) {
        var result = [];
     for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number' && arr[i] > maxValue) {
               result.push(arr[i]);
        }
     }
     return result;
};

console.log(filter(arr, 25))

