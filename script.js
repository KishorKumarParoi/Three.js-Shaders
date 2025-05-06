import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';

console.log(THREE);

/* Scene Mesh Camera Renderer */

// Scene
const scene = new THREE.Scene();

// Group
const group = new THREE.Group();

// Mesh 
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'purple' });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.z = 1;
mesh.scale.x = 1;

// Mesh2
const geometryT = new THREE.BoxGeometry(1, 1, 1);
const materialT = new THREE.MeshBasicMaterial({ color: "green" });
const meshT = new THREE.Mesh(geometryT, materialT);
meshT.position.y = 2;

group.add(mesh, meshT);
group.position.x = 1;
scene.add(group);

// Camera 
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
};

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 5;
// const helper = new THREE.CameraHelper(camera);
// scene.add(helper);
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
scene.add(camera);

// Renderer
const canvas = document.querySelector('.draw');
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(aspect.width, aspect.height);
renderer.render(scene, camera);