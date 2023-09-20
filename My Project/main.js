

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

window.addEventListener('load', function() {
    const paragraph = document.querySelector('.par');
    paragraph.classList.add('active');
});

gsap.set(".skill1", {opacity: 0, x: 500 })
// gsap.from(".styled-react", {duration: 1, opacity: 0, y: 150, stagger: 0.25});
gsap.to(".skill1", {duration: 3, opacity: 1, x: 0, stagger: 0.25})


gsap.set(".skill2", {opacity: 0, x: -500 })
// gsap.from(".styled-react", {duration: 1, opacity: 0, y: 150, stagger: 0.25});
gsap.to(".skill2", {duration: 3, opacity: 1, x: 0, stagger: 0.25})




window.addEventListener('load', () => {
    // Set the initial opacity of the container to 1 to trigger the fade-in animation
    gsap.to('.about-body', { opacity: 1, duration: 1, ease: 'power2.inOut' });
  
    // Create separate timelines for the content and image animations
    const contentTimeline = gsap.timeline();
    const imageTimeline = gsap.timeline();
  
    // Content Animation
    contentTimeline.set(".about-title", { opacity: 0, y: -300 });
    contentTimeline.set("#about-btn", { opacity: 0, y: 300 });
  
    contentTimeline.to('.about-title', { opacity: 1, y: 0, duration: 3, ease: 'bounce' });
    contentTimeline.to('#about-btn', { opacity: 1, y: 20, duration: 2 }, '-=1');
  
    const paragraph = document.querySelector('.about-paragraph');
    const paragraphLines = paragraph.textContent.split('\n').filter(line => line.trim() !== '');
  
    paragraph.textContent = '';
  
    paragraphLines.forEach((line, index) => {
      const span = document.createElement('span');
      span.textContent = line;
      paragraph.appendChild(span);
  
      contentTimeline.fromTo(
        span,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.2'
      );
    });
  
    // Image Animation (Reverse the scale animation)
    imageTimeline.from('.img-border', { scaleX: 1.5, scaleY: 1.5, duration: 3 });
    imageTimeline.to('.img-border', { scaleX: 1, scaleY: 1, duration: 3 }, 0);
  
    // Start both animations at the same time
    gsap.timeline().add(contentTimeline, 0).add(imageTimeline, 0);
});
