const array = [1, 2, 3, 4, 5];
const duplicates = function (array) {
    let double = false
    for (i = 0; i < array.length; i++) {
        if(array.indexOf(array[i]) !== i)
        {
            double = true
        }
    }
    return double
}
console.log(duplicates(array));