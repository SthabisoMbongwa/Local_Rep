import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import gsap from './node_modules/gsap/index.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


const textureLoader = new THREE.TextureLoader()

const normalTexture = textureLoader.load('/texture/height3.jpg')

// Canvas
const canvas = document.querySelector('.webgl')

// Scene
const scene = new THREE.Scene()


// Objects

// Reduce sphere size in small screen, for small screen 0.6, 
// Add auto reloud, sphere doesnt update automatically when screen size decrease

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const geometry = new THREE.SphereBufferGeometry(0.9, 64, 64) 

// function geom(){

//     if(sizes.width / sizes.height < 1.3648854961832062){

//         const geometry = new THREE.SphereBufferGeometry(0.6, 64, 64)
//         return geometry
//     }else{
//         const geometry = new THREE.SphereBufferGeometry(0.9, 64, 64) 
//         return geometry
//     }
    
// }

// const geometry = geom()



// Materials
const material = new THREE.MeshStandardMaterial()
material.metalness = 0.7
material.roughness = 0.2
material.normalMap = normalTexture;
material.color = new THREE.Color(0x292929)

// Mesh
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

// Lights
const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

const pointLight2 = new THREE.PointLight(0xff0000, 2)
pointLight2.position.set(-1.21, 1.1, -0.48)
pointLight2.intensity = 0.85
scene.add(pointLight2)

const pointLight3 = new THREE.PointLight(0xff, 2)
pointLight3.position.set(1.2, -1.4, -0.46)
pointLight3.intensity = 1.7
scene.add(pointLight3)


window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

// document.addEventListener('mousemove', onDocumentMouseMove)

// let mouseX = 0
// let mouseY = 0

// let targetX = 0
// let targetY = 0

// const windowHalfX = window.innerWidth / 2;
// const windowHalfY = window.innerHeight / 2;

// function onDocumentMouseMove(event) {
//     mouseX = (event.clientX - windowHalfX)
//     mouseY = (event.clientY - windowHalfY)
// }

const clock = new THREE.Clock()

const tick = () => {
    // targetX = mouseX * .001
    // targetY = mouseY * .001

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = -.2 * elapsedTime
    // sphere.rotation.y = .2 * elapsedTime
    //  sphere.rotation.x = .2 * elapsedTime



    // sphere.rotation.y += .5 * (targetX - sphere.rotation.y)
    // sphere.rotation.x += .05 * (targetY - sphere.rotation.x)
    // sphere.position.z += -.05 * (targetY - sphere.rotation.x)
    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

//Timeline
const tl = gsap.timeline({defaults: { duration: 1}});
tl.fromTo(sphere.scale, {z: 0, x: 0, y: 0}, {z: 1, x: 1, y: 1});
tl.fromTo("nav", { y: "-100%"}, {y: "0%"});
tl.fromTo(".hero-content", { opacity: 0}, { opacity: 1});



// // Get references to error message elements
// var nameError = document.getElementById('name-error');
// var emailError = document.getElementById('email-error');
// var messageError = document.getElementById('message-error');
// var submitError = document.getElementById('submit-error');

// // Function to validate the Name field
// function validateName() {
//     var name = document.getElementById('contact-name').value;
//     if (name.length == 0) {
//         nameError.innerHTML = 'Full Name is required';
//         return false;
//     }
//     if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
//         nameError.innerHTML = 'Please write Full Name';
//         return false;
//     }

//     nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
//     return true;
// }

// // Function to validate the Email field
// function validateEmail() {
//     var email = document.getElementById('contact-email').value;

//     if (email.length == 0) {
//         emailError.innerHTML = 'Email is required';
//         return false;
//     }
//     if (!email.match(/^[A-Za-z._-]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
//         emailError.innerHTML = 'Invalid Email Format';
//         return false;
//     }

//     emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
//     return true;
// }

// // Function to validate the Message field
// function validateMessage() {
//     var message = document.getElementById('contact-message').value;
//     var required = 30;
//     var left = required - message.length;

//     if (left > 0) {
//         messageError.innerHTML = left + ' more characters required';
//         return false;
//     }

//     messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
//     return true;
// }

// // Function to validate the entire form
// function validateForm() {
//     if (!validateName() || !validateEmail() || !validateMessage()) {
//         submitError.style.display = 'block';
//         submitError.innerHTML = 'Please fix errors to submit';
//         setTimeout(function () {
//             submitError.style.display = 'none';
//         }, 3000);
//         return false;
//     }
// }

// // Add an event listener to the form to call validateForm() when submitted
// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('contact-form').addEventListener('submit', function (event) {
//         if (!validateForm()) {
//             event.preventDefault();
//         }
//     });
// });






// const navSlide = () => {
//     const burger = document.querySelector(".burger");
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');


//     //Toggle Nav 
//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');

//         //Animate Links
//         navLinks.forEach((link, index) => {
//             if (link.computedStyleMap.animation) {
//                 link.computedStyleMap.animation = ''
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
//             }
//         });

//         //Burger Animation
//         burger.classList.toggle('toggle');
//     });


// }

// navSlide();

// //Cards

// const cards = document.querySelectorAll('.card');

// cards.forEach((card, index) => {
//     card.addEventListener("click", () => {
//         const state = Flip.getState(cards);

//         const isCardActive = card.classList.contains("active");
//         cards.forEach((otherCard, otherIdx) => {
//             otherCard.classList.remove('active');
//             otherCard.classList.remove('is-inactive');
//         });
//         if(!isCardActive) card.classList.add("active")
//     })
// }) 


// // Get all elements with class "nav-links"
// var navLinks = document.getElementsByClassName("nav-links");

// // Iterate through each ".nav-links" element
// for (var i = 0; i < navLinks.length; i++) {
//     // Get all elements with class "link" within the current ".nav-links" element
//     var links = navLinks[i].getElementsByClassName("link");

//     // Iterate through each link within the current ".nav-links" element
//     for (var j = 0; j < links.length; j++) {
//         // Add a click event listener to the link
//         links[j].addEventListener("click", function () {
//             // Within this function, "this" refers to the clicked link element
//             // You can access its attributes or perform actions here
//             // Example: To add a class "active" to the clicked link
//             this.classList.add("active");

//             // Your logic here
//         });
//     }
// }


