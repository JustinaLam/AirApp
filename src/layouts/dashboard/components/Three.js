import * as THREE from 'three';

import { useEffect, useRef } from "react";

function MyThree() {
    const refContainer = useRef(null);
    useEffect(() => {

    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 3.45, window.innerHeight / 3.55);
    // renderer.setSize(props.width, props.height);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current && refContainer.current.appendChild( renderer.domElement );


    // Set up camera position
camera.position.z = 5;

// Add lights to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

let count = 10;

// Particle system parameters
const particleCount = count * 1000; // Adjust the number of particles as desired
const particleSize = 0.001; // Adjust the size of the particles
const particleColor = 0x808080; // Adjust the color of the particles #808080

// Create the particle system
const particlesGeometry = new THREE.BufferGeometry();
const particlesMaterial = new THREE.PointsMaterial({ size: particleSize, color: particleColor });
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// Generate random particle positions and colors
const positions = [];
const colors = [];

for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 10;
    const z = (Math.random() - 0.5) * 10;
    positions.push(x, y, z);

    const r = Math.random();
    const g = Math.random();
    const b = Math.random();
    colors.push(r, g, b);
}

particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
particlesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));


var animateParticles = function () {
        requestAnimationFrame(animateParticles);

    // Update particle positions or properties here
    const positions = particlesGeometry.getAttribute('position').array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] -= Math.random() * 0.005; // Move particles upward
        if (positions[i + 1] < -5) {
            positions[i + 1] = 5; // Reset particles' Y position when they go beyond the screen
        }
    }
    particlesGeometry.getAttribute('position').needsUpdate = true;

    renderer.render(scene, camera);
    };
    animateParticles();
    }, []);
    return (
        <div ref={refContainer}></div>

    );
}

export default MyThree