let P = document.querySelector("p"),
    div = document.querySelector(".our-element"),
    start = div.cloneNode(),
    end = div.cloneNode();

P.remove();

function theTask(el, value) {
    el.className = value.toLowerCase()
    el.title = `${value} element`
    el.setAttribute("data-value", value)
    el.textContent = value
}

theTask(start, "Start")
theTask(end, "End")

div.before(start)
div.after(end)