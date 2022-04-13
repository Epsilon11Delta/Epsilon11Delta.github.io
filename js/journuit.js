document.querySelector("#button").addEventListener("click", ()=>{
    document.querySelector("#button").classList.toggle("button-moon");
    document.querySelector("#knob").classList.toggle("knob-end");
    document.querySelector("body").classList.toggle("bodynight");
    document.querySelector("#sun").classList.toggle("sun-hidden");
    document.querySelector("#moon").classList.toggle("moon-show");
    document.querySelector("#environnement").classList.toggle("env-night");
    document.querySelector("#star-zone").classList.toggle("star-zone-show");
});