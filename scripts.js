document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  menuButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click from bubbling to document
    const isExpanded = this.getAttribute("aria-expanded") === "true";

    this.setAttribute("aria-expanded", !isExpanded);
    menu.classList.toggle("hidden");
  });

  document.addEventListener("click", function () {
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });

  menu.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

// Set up the frustum extents for the orthographic camera
const frustumSize = 0.8; // Controls the size of the view area
const camera = new THREE.OrthographicCamera(
  -frustumSize / 2, // Left
  frustumSize / 2, // Right
  frustumSize / 2, // Top
  -frustumSize / 2, // Bottom
  0.1, // Near clipping plane
  1000 // Far clipping plane
);
const container = document.querySelector("#container");
if (!container) {
  console.error("Container not found!");
}
let object;

let controls;

const loader = new GLTFLoader();

loader.load(
  //TODO:
  //https://19450-website.s3.ap-southeast-2.amazonaws.com/Robot.glb
  "Images/Robot.glb",
  function (gltf) {
    object = gltf.scene;
    scene.add(object);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.error(error);
  }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });

camera.aspect = 100;
camera.updateProjectionMatrix();
renderer.setSize(innerHeight / 3, innerHeight / 3);
camera.updateProjectionMatrix();
renderer.render(scene, camera);
document.getElementById("container").appendChild(renderer.domElement);

camera.position.set(-0.4, -0.2, 0.4);

camera.lookAt(-1, -0.3, 0.2);
//camera.lookAt(-1, 0, 0);
const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(-1, -1, 1);
topLight.castShadow = true;
scene.add(topLight);

controls = new OrbitControls(camera, renderer.domElement);

controls.autoRotate = true;
controls.target.set(-0.1, 0.1, 0);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

window.addEventListener("resize", function resizeRendererToSquare() {
  const size = Math.min(container.clientWidth, container.clientHeight); // Use the smallest dimension
  renderer.setSize(size, size); // Square dimensions
  camera.aspect = 100; // Square aspect ratio
  camera.updateProjectionMatrix(); // Update the camera
});

animate();
