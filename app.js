import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import gsap from './node_modules/gsap/index.js';


const textureLoader = new THREE.TextureLoader();
const normalTexture = textureLoader.load('/texture/height3.jpg');

// Canvas
const canvas = document.querySelector('.webgl');

// Scene
const scene = new THREE.Scene();

// Objects
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

const calculateSphereSize = () => {
    // Calculate the appropriate sphere size based on the screen size
    const minDimension = Math.min(sizes.width, sizes.height);
    const sphereSize = minDimension < 600 ? minDimension / 600 : 1; // Adjust this value as needed
    return sphereSize * 0.9; // Multiply by 0.9 to keep the sphere smaller
};

const geometry = new THREE.SphereBufferGeometry(calculateSphereSize(), 64, 64);

// Materials
const material = new THREE.MeshStandardMaterial();
material.metalness = 0.7;
material.roughness = 0.2;
material.normalMap = normalTexture;
material.color = new THREE.Color(0x292929);

// Mesh
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Lights
const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xff0000, 2);
pointLight2.position.set(-1.21, 1.1, -0.48);
pointLight2.intensity = 0.85;
scene.add(pointLight2);

const pointLight3 = new THREE.PointLight(0xff, 2);
pointLight3.position.set(1.2, -1.4, -0.46);
pointLight3.intensity = 1.7;
scene.add(pointLight3);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Function to handle window resize
const handleResize = () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera aspect ratio
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update sphere size based on the new screen size
    const newSphereSize = calculateSphereSize();
    sphere.scale.set(newSphereSize, newSphereSize, newSphereSize);

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};

window.addEventListener('resize', handleResize);

// Animation
document.addEventListener('mousemove', onDocumentMouseMove);

let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

const windowHalfX = window.innerWidth / 5;
const windowHalfY = window.innerHeight / 5;

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
}

const clock = new THREE.Clock();

const tick = () => {
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    const elapsedTime = clock.getElapsedTime();

    sphere.rotation.y = -0.5 * elapsedTime;

    sphere.rotation.y += 0.5 * (targetX - sphere.rotation.y);
    sphere.rotation.x += 0.05 * (targetY - sphere.rotation.x);
    sphere.position.z += -0.05 * (targetY - sphere.rotation.x);

    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
}

tick();




//Timeline
const tl = gsap.timeline({defaults: { duration: 1}});
tl.fromTo(sphere.scale, {z: 0, x: 0, y: 0}, {z: 1, x: 1, y: 1});

// tl.fromTo(".hero-content", { y: "200%"}, { y: "0%"});
tl.fromTo("nav", { y: "-100%"}, {y: "0%"});

tl.fromTo(".hero-content", { opacity: 0}, { opacity: 1});
// tl.fromTo(".about-content", { y: "-100%"}, {y: "0%"});

