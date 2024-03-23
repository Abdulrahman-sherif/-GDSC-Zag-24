let input = document.querySelector("input")
function theFunction() {
    let theMoney = input.value * 15.6;
    let div = document.querySelector("div")
    div.innerText = `{${input.value}} USD Dollar = {${theMoney.toFixed(2)}} Egyptian Pound`
}
input.oninput = theFunction