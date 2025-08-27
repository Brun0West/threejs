import * as THREE from "https://esm.sh/three@0.179.0";

var containerThree = document.getElementById('three');

var scene, renderer, camera;

var cubo, esfera, plano;

const init = () => {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffff00); // amarillo
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
}

const createRenderer = () => {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  containerThree.appendChild(renderer.domElement);
  console.log(containerThree, scene, renderer, camera);
}

const createBox = () => {
  const geometry = new THREE.BoxGeometry(1,1,1);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  cubo = new THREE.Mesh(geometry, material);

  cubo.position.x = -1.5;
  cubo.position.y = 0;
  cubo.position.z = 0;
  scene.add(cubo);
};

const createSphera = () => {
  const geometry = new THREE.SphereGeometry(0.5, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0x2334B3, wireframe: true });
  esfera = new THREE.Mesh(geometry, material);

  esfera.position.x = 1.5;
  esfera.position.y = 0;
  esfera.position.z = 0;
  scene.add(esfera);
};

const createPlane = () => {
  const geometry = new THREE.PlaneGeometry(5, 6);
  const material = new THREE.MeshBasicMaterial({ color: 0x8A23B3, side: THREE.DoubleSide, wireframe: true });
  plano = new THREE.Mesh(geometry, material);
  plano.rotation.x = Math.PI / 2;
  plano.position.y = -1;
  scene.add(plano);
};

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  if (cubo) {
    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;
  }
  if (esfera) {
    esfera.rotation.x += 0.01;
    esfera.rotation.y += 0.01;
  }
  if (plano) {
    plano.rotation.z += 0.01;

  }
};



init();
createRenderer();
createBox();
createSphera();
createPlane();
animate();


