let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// Elzero

let elzero = mix.map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
}).reduce(function (one, tow) {
    return `${one}${tow}`
})
console.log(elzero)