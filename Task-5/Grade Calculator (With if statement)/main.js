let score = window.prompt("enter your score :");
if (score <= 100 && score >= 90) {
    window.alert(`your score = ${score} = A`)
} else if (score <= 89 && score >= 80) {
    window.alert(`your score = ${score} = B`)
} else if (score <= 79 && score >= 70) {
    window.alert(`your score = ${score} = C`)
} else if (score <= 69 && score >= 60) {
    window.alert(`your score = ${score} = D`)
} else if (score <= 59 && score >= 0) {
    window.alert(`your score = ${score} = F`)
} else {
    window.alert("enter your score correct!")
}