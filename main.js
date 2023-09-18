// import gsap from './node_modules/gsap/index.js';
// import gsap from 'gsap';


function sendMail() {
    event.preventDefault();
    console.log("Function called");
    var params = {
        name: document.getElementById("contact-name").value,
        email: document.getElementById("contact-email").value,
        subject: document.getElementById("contact-subject").value,
        message: document.getElementById("contact-message").value
    };
    
    const serviceID = "service_oqmrksj";
    const templateID = "template_0iomx5h";

    emailjs.send(serviceID, templateID, params)
    .then(
        function(response) {
            console.log("Email sent successfully:", response);
            alert("Your message has been sent successfully!");
            document.getElementById("contact-form").reset(); // Reset the form
        },
        function(error) {
            console.error("Email sending failed:", error);
            alert("Oops! Something went wrong. Please try again later.");
        }
    );
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
            if (link.computedStyleMap.animation) {
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

gsap.set(".card1", {opacity: 0,
                y: -500 })

gsap.to(".card1", {
    opacity: 1,
    duration: 4,
    y: 0
})

gsap.set(".card2", {opacity: 0,
    y: -500 })

gsap.to(".card2", {
opacity: 1,
duration: 4,
y: 0
})




// const tl = gsap.timeline({defaults: { duration: 3}});
// tl.fromTo(".project-cards", { y: "-100%"}, {y: "0%"});
// tl.fromTo(".project-cards", { opacity: 0}, { opacity: 1});
// console.log(tl)
// tl.fromTo(sphere.scale, {z: 0, x: 0, y: 0}, {z: 1, x: 1, y: 1});
// tl.fromTo("nav", { y: "-100%"}, {y: "0%"});


// gsap.to(".cards", {
//     duration: 2,
//     y:200
// })