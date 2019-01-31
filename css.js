
  function displayColor(){
    btnBackground.style.backgroundColor = this.id; 
    codeColor.innerText = this.id; 
}


let btnBackground = document.getElementById("backgroundColor"); 

let red = document.getElementById("red"); 
let green = document.getElementById("green");
let blue = document.getElementById("blue"); 

let codeColor = document.getElementById("codeColor"); 

red.addEventListener("click", displayColor); 
green.addEventListener("click", displayColor); 
blue.addEventListener("click", displayColor); 





