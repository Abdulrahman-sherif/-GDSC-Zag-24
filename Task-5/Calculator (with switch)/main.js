let number_1, number_2, theOprator;
number_1 = window.prompt("Enter First Number :");
theOprator = window.prompt("Enter your opreator from *, /, -, +");
number_2 = window.prompt("Enter Seconed Number :");
switch (theOprator) {
    case '+':
        window.alert(`its = ${+number_1 + +number_2}`)
        break;
    case '-':
        window.alert(`its = ${number_1 - number_2}`)
        break;
    case '*':
        window.alert(`its = ${number_1 * number_2}`)
        break;
    case '/':
        window.alert(`its = ${number_1 / number_2}`)
        break;
    default:
        window.alert("!wrong!")
        break;
}