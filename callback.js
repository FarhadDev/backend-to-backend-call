//Example usage
const numbers = [1, 2, 3, 4, 5];

//consumer or api provider
function customMap(array, callback) {
    const result = [];
    //Iterate over each element in the input array
    for (let i = 0; i < array.length; i++) {
        //Apply the callback function to the current element and store the result
        result.push(callback(array[i], i, array))
    }

    return result;
}

cb = function (element) {
    return element * 2;
}

const doubleNumbers = customMap(numbers, cb);

console.log(doubleNumbers);