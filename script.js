const area1 = document.getElementById("area1");
const area2 = document.getElementById("area2");
const area3 = document.getElementById("area3");
const area4 = document.getElementById("area4");
const area5 = document.getElementById("area5");
const area6 = document.getElementById("area6");
const area7 = document.getElementById("area7");
const area8 = document.getElementById("area8");
const area9 = document.getElementById("area9");

const p1 = document.getElementById("p1").value;
const p2 = document.getElementById("p2").value;


function player(ev) {
    //o Verifications 
    ev.preventDefault()
    if (area1.value === "x" && area2.value === "x" && area3.value === "x") {
        area1.classList.add("win");
        area2.classList.add("win");
        area3.classList.add("win");
        alert(`Parabéns ${p1}, você venceu!!!`)
        area1.value = ""
        area2.value = ""
        area3.value = ""
        area1.classList.remove("win");
        area2.classList.remove("win");
        area3.classList.remove("win");

    } else if (area4.value === "x" && area5.value === "x" && area6.value === "x") {
        area4.classList.add("win");
        area5.classList.add("win");
        area6.classList.add("win");
        alert(`Parabéns ${p1}, você venceu!!!`)
        area4.value = ""
        area5.value = ""
        area6.value = ""
        area4.classList.remove("win");
        area5.classList.remove("win");
        area6.classList.remove("win");
    } else if (area7.value === "x" && area8.value === "x" && area9.value === "x") {
        area7.classList.add("win");
        area8.classList.add("win");
        area9.classList.add("win");
        alert(`Parabéns ${p1}, você venceu!!!`)
        area7.value = ""
        area8.value = ""
        area9.value = ""
        area7.classList.remove("win");
        area8.classList.remove("win");
        area9.classList.remove("win");
    } else if (area1.value === "x" && area4.value === "x" && area7.value === "x") {
        area1.classList.add("win");
        area4.classList.add("win");
        area7.classList.add("win");
        alert(`Parabéns ${p1}, você venceu!!!`)
        area1.value = ""
        area4.value = ""
        area7.value = ""
        area1.classList.remove("win");
        area4.classList.remove("win");
        area7.classList.remove("win");
    } else if (area2.value === "x" && area5.value === "x" && area8.value === "x") {
        area2.classList.add("win");
        area5.classList.add("win");
        area8.classList.add("win");
        alert(`Parabéns ${p1}, você venceu!!!`)
        area2.value = ""
        area5.value = ""
        area8.value = ""
        area2.classList.remove("win");
        area5.classList.remove("win");
        area8.classList.remove("win");
    } else if (area3.value === "x" && area6.value === "x" && area9.value === "x") {
        area3.classList.add("win");
        area6.classList.add("win");
        area9.classList.add("win");
        alert(`Parabéns ${p1}, você venceu!!!`)
        area3.value = ""
        area6.value = ""
        area9.value = ""
        area3.classList.remove("win");
        area6.classList.remove("win");
        area9.classList.remove("win");
    } else if (area1.value === "x" && area5.value === "x" && area9.value === "x") {
        area1.classList.add("win");
        area5.classList.add("win");
        area9.classList.add("win");
        alert(`Parabéns ${p1}, você venceu!!!`)
        area1.value = ""
        area5.value = ""
        area9.value = ""
        area1.classList.remove("win");
        area5.classList.remove("win");
        area9.classList.remove("win");
    } else if (area3.value === "x" && area5.value === "x" && area7.value === "x") {
        area3.classList.add("win");
        area5.classList.add("win");
        area7.classList.add("win");
        alert(`Parabéns ${p1}, você venceu!!!`)
        area3.value = ""
        area5.value = ""
        area7.value = ""
        area3.classList.remove("win");
        area5.classList.remove("win");
        area7.classList.remove("win");


        //----------------------------O Verifications---------------------------------------- 
    } else if (area1.value === "o" && area2.value === "o" && area3.value === "o") {
        area1.classList.add("win");
        area2.classList.add("win");
        area3.classList.add("win");
        alert(`Parabéns ${p2}, você venceu!!!`)
        area1.value = ""
        area2.value = ""
        area3.value = ""
        area1.classList.remove("win");
        area2.classList.remove("win");
        area3.classList.remove("win");

    } else if (area4.value === "o" && area5.value === "o" && area6.value === "o") {
        area4.classList.add("win");
        area5.classList.add("win");
        area6.classList.add("win");
        alert(`Parabéns ${p2}, você venceu!!!`)
        area4.value = ""
        area5.value = ""
        area6.value = ""
        area4.classList.remove("win");
        area5.classList.remove("win");
        area6.classList.remove("win");
    } else if (area7.value === "o" && area8.value === "o" && area9.value === "o") {
        area7.classList.add("win");
        area8.classList.add("win");
        area9.classList.add("win");
        alert(`Parabéns ${p2}, você venceu!!!`)
        area7.value = ""
        area8.value = ""
        area9.value = ""
        area7.classList.remove("win");
        area8.classList.remove("win");
        area9.classList.remove("win");
    } else if (area1.value === "o" && area4.value === "o" && area7.value === "o") {
        area1.classList.add("win");
        area4.classList.add("win");
        area7.classList.add("win");
        alert(`Parabéns ${p2}, você venceu!!!`)
        area1.value = ""
        area4.value = ""
        area7.value = ""
        area1.classList.remove("win");
        area4.classList.remove("win");
        area7.classList.remove("win");
    } else if (area2.value === "o" && area5.value === "o" && area8.value === "o") {
        area2.classList.add("win");
        area5.classList.add("win");
        area8.classList.add("win");
        alert(`Parabéns ${p2}, você venceu!!!`)
        area2.value = ""
        area5.value = ""
        area8.value = ""
        area2.classList.remove("win");
        area5.classList.remove("win");
        area8.classList.remove("win");
    } else if (area3.value === "o" && area6.value === "o" && area9.value === "o") {
        area3.classList.add("win");
        area6.classList.add("win");
        area9.classList.add("win");
        alert(`Parabéns ${p2}, você venceu!!!`)
        area3.value = ""
        area6.value = ""
        area9.value = ""
        area3.classList.remove("win");
        area6.classList.remove("win");
        area9.classList.remove("win");
    } else if (area1.value === "o" && area5.value === "o" && area9.value === "o") {
        area1.classList.add("win");
        area5.classList.add("win");
        area9.classList.add("win");
        alert(`Parabéns ${p2}, você venceu!!!`)
        area1.value = ""
        area5.value = ""
        area9.value = ""
        area1.classList.remove("win");
        area5.classList.remove("win");
        area9.classList.remove("win");
    } else if (area3.value === "o" && area5.value === "o" && area7.value === "o") {
        area3.classList.add("win");
        area5.classList.add("win");
        area7.classList.add("win");
        alert(`Parabéns ${p2}, você venceu!!!`)
        area3.value = ""
        area5.value = ""
        area7.value = ""
        area3.classList.remove("win");
        area5.classList.remove("win");
        area7.classList.remove("win");
    }

}

area1.addEventListener("click", player)
area2.addEventListener("click", player)
area3.addEventListener("click", player)
area4.addEventListener("click", player)
area5.addEventListener("click", player)
area6.addEventListener("click", player)
area7.addEventListener("click", player)
area8.addEventListener("click", player)
area9.addEventListener("click", player)

