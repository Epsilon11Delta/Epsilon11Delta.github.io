// setInterval(()=>{
//     if (surname.innerText == "The Inazuma Effect") {
//         surname.classList.remove("inazuma");
//         document.querySelector("div.subtitle>span").innerText = "(Epsilon Delta)";
//     }
//     else {
//         document.querySelector("div.subtitle>span").innerText = "The Inazuma Effect"
//         surname.classList.add("inazuma");
//     }
// }, 3000);
document.querySelector('.creations>h2').addEventListener("click", function(){
    document.querySelectorAll('#colon1').forEach(e=>{e.classList.toggle("grid-gauche-one");})
    document.querySelectorAll('#colon3').forEach(e=>{e.classList.toggle("grid-droite-one");})
    document.querySelector('.div2').classList.toggle("grid-milieu-one");
    document.querySelector('.div8').classList.toggle("grid-milieu-two");
});