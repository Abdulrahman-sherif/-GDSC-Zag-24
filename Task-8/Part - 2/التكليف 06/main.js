let count = document.getElementsByName("elements")[0],
    text = document.getElementsByName("texts")[0],
    type = document.querySelector("select"),
    result = document.querySelector(".results"),
    form = document.forms;

form[0].onsubmit = function (el) {
    el.preventDefault();
    document.querySelectorAll(".box").forEach(el => el.remove());

    for (let i = 1; i <= count.value; i++) {
        let theEl = document.createElement(type.value);
        let theText = document.createTextNode(text.value);

        theEl.className = "box";
        theEl.title = "Element";
        theEl.id = `id-${i}`;

        theEl.style.display = "inline-block";
        theEl.style.width = "200px";
        theEl.style.margin = "20px";
        theEl.style.padding = "10px";
        theEl.style.color = "white";
        theEl.style.backgroundColor = "blue";
        theEl.style.textAlign = "center";
        theEl.style.borderRadius = "0.5rem";

        theEl.appendChild(theText);
        result.appendChild(theEl)
    }
}

