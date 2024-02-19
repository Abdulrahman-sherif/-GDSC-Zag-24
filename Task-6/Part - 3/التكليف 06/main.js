function multiply(...subtract) {
    let final = 1;
    for (let i = 0; i < subtract.length; i++) {
        if (typeof subtract[i] === "number") {
            subtract[i] = parseInt(subtract[i]);
            final = final * subtract[i];
        }
    }
    console.log(final);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000