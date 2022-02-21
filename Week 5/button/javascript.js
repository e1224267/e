const body = document.getElementById("body");
const btn = document.getElementById("btn");
function openprompt() {
    let box = document.createElement("div");
    let message = document.createElement("p");
    message.innerHTML = "winner chicken dinner";
    box.appendChild(message);
    body.appendChild(box);
}
