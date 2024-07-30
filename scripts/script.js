button = document.getElementById("botao")
hobbie = document.getElementsByClassName("hobbies")


function changeColor (){
   document.body.style.backgroundColor = "#ffffff"; 
   for (let i = 0; i < hobbie.length;i++){
    hobbie[i].style.backgroundColor = "#050505"
   }
    
};

button.addEventListener("click", changeColor)