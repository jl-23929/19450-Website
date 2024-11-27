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
const aspect = window.innerWidth / window.innerHeight;

// Set up the frustum extents for the orthographic camera
const frustumSize = 0.8; // Controls the size of the view area
const camera = new THREE.OrthographicCamera(
  (-frustumSize * aspect) / 2, // Left
  (frustumSize * aspect) / 2, // Right
  frustumSize / 2, // Top
  -frustumSize / 2, // Bottom
  0.1, // Near clipping plane
  1000 // Far clipping plane
);

let object;

let controls;

let objectToRender = "robot";

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

const loader = new GLTFLoader();

loader.load(
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

// renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

renderer.setSize(
  document.getElementById("container").clientWidth / 2,
  document.getElementById("container").clientHeight / 2
);

document.getElementById("container").appendChild(renderer.domElement);

camera.position.set(0, -0.4, 0.4);

// camera.lookAt(-1, -0.3, 0.2);
camera.lookAt(0, 0, 0);
const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(-1, -1, 1);
topLight.castShadow = false;
scene.add(topLight);

controls = new OrbitControls(camera, renderer.domElement);

controls.autoRotate = true;
controls.target.set(-0.1, 0.1, 0);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
