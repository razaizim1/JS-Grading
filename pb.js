var physics = 90;
var chemistry = 95;
var computer = 85;

var average = (physics + chemistry + computer) / 3;
console.log(average)

if (average >= 90) {
    console.log("Grade A")
} else if (average >= 80) {
    console.log("Graded B")
} else if (average >= 70) {
    console.log("Grade C")
} else {
    console.log("Fail")
}