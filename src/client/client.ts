import * as THREE from '/build/three.module.js'
import { OrbitControls } from '/jsm/controls/OrbitControls'


const scene: THREE.Scene = new THREE.Scene()

const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

camera.position.z = 2

const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', render)


const geometry: THREE.BoxGeometry = new THREE.BoxGeometry()
const material: THREE.MeshNormalMaterial = new THREE.MeshNormalMaterial({}) //color: 0x00ff00, wireframe: false})// true })

const cube: THREE.Mesh = new THREE.Mesh(geometry, material)
scene.add(cube)

// const geometry: THREE.DodecahedronGeometry = new THREE.DodecahedronGeometry(1, 5)
// const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({})

// const dodecahedron: THREE.Mesh = new THREE.Mesh(geometry, material)
// scene.add(dodecahedron)


// const geometry: THREE.ConeBufferGeometry = new THREE.ConeBufferGeometry()
// const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe:  true })

// const cone: THREE.Mesh = new THREE.Mesh(geometry, material)
// scene.add(cone)



window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}


// var animate = function () {
//     requestAnimationFrame(animate)

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera)
// };

function render() {
    renderer.render(scene, camera)
}
render()
//animate();