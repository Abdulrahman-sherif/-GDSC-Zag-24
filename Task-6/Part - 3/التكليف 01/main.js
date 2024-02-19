function sayHello(theName, theGender) {
    let gen = window.prompt("Write Your Gender (Male, Female, Not)")
    let type = "not selcted"
    if (gen === "Male") {
        type = "Mr";
    } else {
        type = "Miss";
    }
    if (gen === theGender) {
        console.log(`Hello ${type} ${theName}`);
    }
    if (gen !== theGender) {
        console.log(`Hello ${theName}`);
    }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"