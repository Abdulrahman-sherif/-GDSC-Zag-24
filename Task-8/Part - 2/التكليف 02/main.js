for (let i = 0; i < 10; i++) {
    let myDiv = document.createElement("div"),
        myImg = document.createElement("img")

    myImg.setAttribute("decoding", "async");
    myImg.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    myImg.alt = "Elzero Logo";
    myDiv.appendChild(myImg)

    console.log(myDiv)
}