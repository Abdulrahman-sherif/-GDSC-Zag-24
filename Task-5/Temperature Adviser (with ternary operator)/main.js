let theTemperature = window.prompt("Enter The Temperature :");

theTemperature < 10
    ? window.alert(`Temperature = ${theTemperature} and we recommend wearing a coat.`)
    : theTemperature >= 10 && theTemperature <= 20
        ? window.alert(`Temperature = ${theTemperature} and we recommend wearing a sweater.`)
        : window.alert(`Temperature = ${theTemperature} and we recommend wearing a T-shirt.`)