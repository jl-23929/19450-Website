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
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#container");
  if (!container) {
    console.error("Container not found!");
    return;
  }

  // Scene, Camera, and Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth / 3, window.innerHeight / 3);

  // Append the renderer to the container
  container.appendChild(renderer.domElement);

  // Add a Cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Position Camera
  camera.position.z = 5;

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
});
