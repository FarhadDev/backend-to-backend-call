//If we want to use with array then we need it patch it with prototype
//That means pura array object er shathe, array ami jokhon e make korbo
//prototype er shathe customMap ta attach kore dear karone tokhon ami customMap jekono
//array er shathe use korte parbo
Array.prototype.customMap = function (callback) {
    const result = [];
    //Iterate over each element in the input array
    for (let i = 0; i < this.length; i++) {
        //Apply the callback function to the current element and store the result
        result.push(callback(this[i], i, this))
    }

    return result;
}

//Example usage
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.customMap((element) => element * 2)
console.log(doubleNumbers);
