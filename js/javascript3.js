var number = prompt("Enter a number:");
number = parseInt(number);
for (var i = 0; i <= number; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}