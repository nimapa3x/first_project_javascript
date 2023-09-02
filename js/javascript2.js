var number = prompt("Enter a number:");
number = parseInt(number);
var sum = 0;
for (var i = 0; i <= number; i++) {
    sum += i;
}
console.log("The sum of number betwwen 0 and " + number + " is:" + sum);