import * as THREE from "https://esm.sh/three@0.179.0";

var containerThree = document.getElementById('three');

var scene, renderer, camera;

const init = () => {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffff00); // amarillo
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
}

const loadTexture = () => {
  var loader = new THREE.TextureLoader();

  var texture = loader.loadAsync()
}

const createRenderer = () => {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  containerThree.appendChild(renderer.domElement);
  console.log(containerThree, scene, renderer, camera);
}

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

init();
createRenderer();
animate();


