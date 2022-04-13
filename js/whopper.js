document.querySelector('img').addEventListener('click',()=>{
    if (this.src == "whopper-assets/nike.png") {
        document.querySelectorAll('h1').forEach(element => {element.innerText = "WHOPPER"});
        document.querySelector('img').src = "whopper-assets/whopper.png";  
        document.querySelector('img').classList.delete("img-nike");  
    }
    else {
        document.querySelectorAll('h1').forEach(element => {element.innerText = "SNEAKERS"});
        document.querySelector('img').src = "whopper-assets/nike.png";
        document.querySelector('img').classList.add("img-nike");  
    }
    
});