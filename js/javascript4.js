function countNumbers() {
    var count = 0;
    for (var i = 0; i <= 100; i++) {
        if (i % 3 !== 0 && i % 7 !== 0) {
            count++;
        }
    }
    return count;
}
var result = countNumbers();
console.log("The number of numbers between 0 and 100 that are not divisible by 3 or 7 is: " + result);