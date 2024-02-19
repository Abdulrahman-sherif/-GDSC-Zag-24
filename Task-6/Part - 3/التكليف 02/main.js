function calculate(firstNum, secondNum = ", Second Number Not Found", operation) {
    switch (operation) {
        case 'add':
            console.log(`its = ${firstNum + secondNum}`)
            break;
        case 'subtract':
            console.log(`its = ${firstNum - secondNum}`)
            break;
        case 'multiply':
            console.log(`its = ${firstNum * secondNum}`)
            break;
        default:
            console.log(firstNum + secondNum)
            break;
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600