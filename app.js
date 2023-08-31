// Database reference: https://online-profile-e324b-default-rtdb.firebaseio.com/

var navLinks = document.getElementsByClassName("nav-links");
var links = navLinks.getElementsByClassName("link");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = navLinks.getElementsByClassName("active");
  });
}






const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle Nav 
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

          //Animate Links
    navLinks.forEach((link, index) => {
        if(link.computedStyleMap.animation){
            link.computedStyleMap.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
        }
        });

    //Burger Animation
        burger.classList.toggle('toggle'); 
    });
  

}

navSlide(); 

