let myString = "EElllzzzzzzzeroo";
// Elzero
let elzero = myString.split("").reduce(function (one, two) {
    console.log(`one = ${one}`)
    console.log(`two = ${two}`)
    console.log(`one + two = ${one}${two}`)
    console.log(`---------------`)
    return one === two ? two : ""
})

console.log(elzero)