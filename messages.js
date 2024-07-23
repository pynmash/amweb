const form = document.querySelector("#msg-form")
const input = document.querySelector("#msg-input")
const list = document.querySelector("#msg-list")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value != "") {
        const message = input.value.trim();
        const newLI = document.createElement("li")
        newLI.innerText = message
        list.append(newLI);
        input.value = ""
    }
})

form.addEventListener("reset", function (e) {
    list.innerHTML = ""
})