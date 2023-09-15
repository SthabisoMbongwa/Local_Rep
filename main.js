
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
