let classesAdd = document.querySelector(".classes-to-add"),
    classesRemove = document.querySelector(".classes-to-remove"),
    elementCurrent = document.querySelector(".element"),
    divClass = document.querySelector(".classes-list div")

console.log(elementCurrent)

function theTask() {
    document.querySelectorAll("span").forEach(el => el.remove())
    for (let i = 0; i < this.value.trim().split(" ").length; i++) {
        if (classesAdd.value) {
            elementCurrent.classList.add(classesAdd.value.toLowerCase().trim().split(" ")[i])
        }
        if (classesRemove.value) {
            elementCurrent.classList.remove(classesRemove.value.toLowerCase().trim().split(" ")[i])
        }
        this.value = "";
        if (elementCurrent.classList.length) {
            [...elementCurrent.classList].sort().forEach(el => {
                let spanClass = document.createElement("span")
                spanClass.textContent = el
                divClass.append(spanClass)
            })
        } else divClass.textContent = "No Classes To Show";
    }
}
classesAdd.onblur = theTask;
classesRemove.onblur = theTask;