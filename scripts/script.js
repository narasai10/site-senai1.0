button = document.getElementById("botao");
hobbie = document.getElementsByClassName("hobbies");
nav_hobbie = document.getElementById("nav_hobbie");
nav_afazeres = document.getElementById("nav_afazeres");
nav_vacation = document.getElementById("nav_vacation");


var darkMode = false;

function changeColor (){
   var image = document.getElementById("bed");
   var hobbieLink = document.getElementById("hobbieLink");
   var links = hobbieLink.querySelectorAll("a");
   var moon = document.getElementById("moon")
   if(!darkMode){
   document.body.style.backgroundColor = "#06434A"; 
   for (let i = 0; i < hobbie.length;i++){
    hobbie[i].style.backgroundColor = "#050505"
    hobbie[i].style.color = '#ffffff';
   }
   // image.src = "../assets/bed_white.svg"
   image.style.opacity = 0;
   moon.style.opacity = 0;

   setTimeout(function(){
      image.src = "../assets/bed_white.svg";
      moon.src = "../assets/sun.svg"
      image.style.opacity=1;
      moon.style.opacity = 1;
   }, 150);

   for(let i=0;i<links.length;i++){
      links[i].style.color = "red";
   };
}
else{
   document.body.style.backgroundColor = ""; 
   for (let i = 0; i < hobbie.length;i++){
    hobbie[i].style.backgroundColor = ""
    hobbie[i].style.color = '';
   }
   // image.src = "../assets/bed_white.svg"
   image.style.opacity = 0;
   moon.style.opacity = 0;

   setTimeout(function(){
      image.src = "../assets/bed_black.svg";
      moon.src = "../assets/moon.svg";
      moon.style.opacity = 1;
      image.style.opacity = 1;
   }, 150)

   for(let i=0;i<links.length;i++){
      links[i].style.color = "";
   };
}
darkMode = !darkMode
};

function showBorders(element){
   document.getElementById(element).style.border = `solid 2px red`
   setTimeout(function() {
      document.getElementById(element).style.border = ""
   }, 250);

}

button.addEventListener("click", changeColor)
nav_afazeres.addEventListener("click", function(){showBorders('afazeres')});
nav_hobbie.addEventListener("click", function(){showBorders("hobbieLink")});
nav_vacation.addEventListener("click", function(){showBorders("vacation")})
