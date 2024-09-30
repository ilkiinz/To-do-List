const inputBox = document.getElementById("input-box");
const listt = document.getElementById("list");

function addTask() {
    if (inputBox.value !== "") {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listt.appendChild(li);

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        span.onclick = function () {
            let li = span.parentElement;
            li.style.display = 'none';
        }
    }
    inputBox.value = "";
    
}

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

listt.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
    }
});
