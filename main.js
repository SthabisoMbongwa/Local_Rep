

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

gsap.set(".project-cards", {opacity: 0,
                y: -500 })

gsap.to(".project-cards", {
    opacity: 1,
    duration: 4,
    y: 0
})

// Import GSAP


// Import GSAP





// Wrap your animation code inside a function to ensure it runs after the page is loaded
window.addEventListener('load', () => {
  // Create separate timelines for the content and image animations
  const contentTimeline = gsap.timeline();
  const imageTimeline = gsap.timeline();

  // Content Animation
  contentTimeline.set(".about-title", {opacity: 0,
    y: -300 })

    contentTimeline.set("#about-btn", {opacity: 0,
        y: 300 })

  contentTimeline.to('.about-title', { opacity: 1, y: 0, duration: 1, ease: 'bounce' });
  
  // Start the button animation at the same time as the title
  contentTimeline.to('#about-btn', { opacity: 1, y: 20, duration: 1 }, '-=1'); 
  
  // '-=1' means at the same time as the title

  // Split the paragraph into lines and animate them individually
  const paragraph = document.querySelector('.about-paragraph');
  const paragraphLines = paragraph.textContent.split('\n').filter(line => line.trim() !== '');

  paragraph.textContent = ''; // Clear the original text

  paragraphLines.forEach((line, index) => {
    const span = document.createElement('span');
    span.textContent = line;
    paragraph.appendChild(span);

    // Animate each line individually with stagger
    contentTimeline.fromTo(
      span,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=0.2' // Staggered delay between lines
    );
  });

  // Image Animation
  imageTimeline.from('.img-border', { scaleX: 0, scaleY: 0, duration: 1 });

  // Start both animations at the same time
  gsap.timeline().add(contentTimeline, 0).add(imageTimeline, 0);
});

// Add more animations as needed

// Add more animations as needed


// Add more animations as needed

// Add more animations as needed


// Add more animations as needed

// gsap.set(".card2", {opacity: 0,
//     y: -500 })

// gsap.to(".card2", {
// opacity: 1,
// duration: 4,
// y: 0
// })




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