// 导入three
import * as THREE from 'three' // 导入所有api 给了 THREE

console.log(THREE)

// 创建场景
const scene = new THREE.Scene();

// 创建相机(透视相机)
const camera = new THREE.PerspectiveCamera(
    75, // 摄像机角度
    window.innerWidth/window.innerHeight, // 宽高比
    0.1,// 最近位置
    1000, // 最远位置
); // 

// 相机位置
camera.position.set(0,0,10) // x y z

// 把相机放到场景里
scene.add(camera);
// 添加物体
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); // 创建几何体
// 材质
const cun = new THREE.MeshBasicMaterial({
    color: 0xfff000
}) // 基础材质

// 根据几何体和材质创建物体
const cube = new THREE.Mesh(geometry,cun)
// 将几何体添加到场景中
scene.add(cube);

// 初始化渲染器
const renderer = new THREE.WebGL1Renderer();
// 设置渲染尺寸大小
renderer.setSize(window.innerWidth,window.innerHeight);
// 渲染器添加到canvas画布
document.body.appendChild(renderer.domElement) // 把body上追加

// 使用渲染器通过相机将场景渲染进来

renderer.render(scene,camera)













 