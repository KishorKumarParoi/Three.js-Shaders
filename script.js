// Importing the Three.js library from a CDN
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';

console.log(THREE); // Log the THREE object to verify the library is loaded

/* ------------------- Scene, Mesh, Camera, and Renderer Setup ------------------- */

// Create a new Three.js scene
const scene = new THREE.Scene();

// Create a group to hold multiple meshes
const group = new THREE.Group();

/* ------------------- Mesh 1: Purple Cube ------------------- */
// Create geometry for a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create a basic material with a purple color
const material = new THREE.MeshBasicMaterial({ color: 'purple' });

// Combine geometry and material into a mesh
const mesh = new THREE.Mesh(geometry, material);

// Set the position and scale of the mesh
mesh.position.z = 1; // Move the cube along the z-axis
mesh.scale.x = 1;    // Set the scale along the x-axis

/* ------------------- Mesh 2: Green Cube ------------------- */
// Create geometry for another cube
const geometryT = new THREE.BoxGeometry(1, 1, 1);

// Create a basic material with a green color
const materialT = new THREE.MeshBasicMaterial({ color: "green" });

// Combine geometry and material into a second mesh
const meshT = new THREE.Mesh(geometryT, materialT);

// Set the position of the second mesh
meshT.position.y = 2; // Move the cube along the y-axis

// Add both meshes to the group
group.add(mesh, meshT);

// Set the position of the group
group.position.x = 1; // Move the group along the x-axis

// Add the group to the scene
scene.add(group);

/* ------------------- Camera Setup ------------------- */
// Define the aspect ratio based on the window size
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
};

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);

// Set the camera's position
camera.position.x = 1; // Move the camera along the x-axis
camera.position.y = 1; // Move the camera along the y-axis
camera.position.z = 5; // Move the camera along the z-axis

// Add an axes helper to visualize the coordinate system
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Add the camera to the scene
scene.add(camera);

/* ------------------- Renderer Setup ------------------- */
// Select the canvas element from the HTML
const canvas = document.querySelector('.draw');

// Create a WebGL renderer and associate it with the canvas
const renderer = new THREE.WebGLRenderer({ canvas });

// Set the size of the renderer to match the window size
renderer.setSize(aspect.width, aspect.height);

// Render the initial scene
renderer.render(scene, camera);

/* ------------------- Animation Loop ------------------- */
// Create a clock to track elapsed time
const clock = new THREE.Clock();

// Define the animation function
const animate = () => {
    // Get the elapsed time since the clock started
    const elapsedTime = clock.getElapsedTime();
    console.log("Elapsed Time: ", elapsedTime);

    // Rotate the first mesh (purple cube) over time
    mesh.rotation.x = elapsedTime;

    // Move the second mesh (green cube) along the x-axis over time
    meshT.position.x += 0.01;

    // Re-render the scene with the updated positions
    renderer.render(scene, camera);

    // Request the next animation frame
    window.requestAnimationFrame(animate);
};

// Start the animation loop
animate();