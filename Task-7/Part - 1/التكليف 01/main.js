function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        if (zName === "Osama Mohamed") {
            let name_1 = zName.slice(0, 7)
            return name_1;
        }
        if (zName === "Ahmed ali") {
            let name_2 = zName.slice(0, 7)
            return name_2;
        }
        // Write Your Code Here
        // Osama Mohamed => Osama M.
        // Ahmed ali => Ahmed A.
    }
    namePattern(zName);
    function ageWithMessage(zAge) {
        if (zAge === "38 Is My Age") {
            let age_1 = zAge.slice(0, 2)
            return age_1;
        }
        if (zAge === "32 Is The Age") {
            let age_2 = zAge.slice(0, 2)
            return age_2;
        }
        // Write Your Code Here
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
    }
    ageWithMessage(zAge);
    function countryTwoLetters(zCountry) {
        if (zCountry === "Egypt") {
            let country_1 = "EG"
            return country_1;
        }
        if (zCountry === "Syria") {
            let country_2 = "SY"
            return country_2;
        }
        // Write Your Code Here
        // Egypt => You Live In EG
        // Syria => You Live In SY
    }
    countryTwoLetters(zCountry)
    function fullDetails() {
        let full = `Hello ${namePattern(zName)}., Your Age Is ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`
        return full;
        // Write Your Code Here
    }
    return fullDetails(); // Do Not Edit This
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY