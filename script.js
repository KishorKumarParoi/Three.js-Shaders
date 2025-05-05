import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';

console.log(THREE);

/* Scene Mesh Camera Renderer */

// Scene
const scene = new THREE.Scene();

// Mesh 
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'purple' });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Camera 
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
};

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

// Renderer
const canvas = document.querySelector('.draw');
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(aspect.width, aspect.height);
renderer.render(scene, camera);