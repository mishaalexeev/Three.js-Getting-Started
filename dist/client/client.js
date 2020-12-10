import * as THREE from '/build/three.module.js';
import { OrbitControls } from '/jsm/controls/OrbitControls';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial({}); //color: 0x00ff00, wireframe: false})// true })
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
//test
// const geometry2: THREE.ConeBufferGeometry = new THREE.ConeBufferGeometry()
// const material2: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false})
// const cone: THREE.Mesh = new THREE.Mesh(geometry2, material2)
// scene.add(cone)
camera.position.z = 2;
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}
// var animate = function () {
//     requestAnimationFrame(animate)
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     renderer.render(scene, camera)
// };
function render() {
    renderer.render(scene, camera);
}
render();
//animate();
