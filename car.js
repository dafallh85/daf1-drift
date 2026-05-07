function createCar(scene){

const car = new THREE.Group();

const bodyMaterial = new THREE.MeshStandardMaterial({
color:0x111111,
metalness:1,
roughness:0.2
});

const neonMaterial = new THREE.MeshStandardMaterial({
color:0x00ffcc,
emissive:0x00ffcc,
emissiveIntensity:1
});

const body = new THREE.Mesh(
new THREE.BoxGeometry(2.4,0.7,5),
bodyMaterial
);

body.position.y = 0.8;

car.add(body);

const top = new THREE.Mesh(
new THREE.BoxGeometry(1.8,0.7,2.5),
new THREE.MeshStandardMaterial({
color:0x222222
})
);

top.position.set(0,1.3,-0.2);

car.add(top);

const spoiler = new THREE.Mesh(
new THREE.BoxGeometry(2,0.1,0.4),
bodyMaterial
);

spoiler.position.set(0,1.2,2.2);

car.add(spoiler);

const neon = new THREE.Mesh(
new THREE.BoxGeometry(2,0.05,4),
neonMaterial
);

neon.position.y = 0.2;

car.add(neon);

function wheel(x,z){

const wheel = new THREE.Mesh(

new THREE.CylinderGeometry(0.45,0.45,0.5,32),

new THREE.MeshStandardMaterial({
color:0x000000
})

);

wheel.rotation.z = Math.PI/2;

wheel.position.set(x,0.4,z);

car.add(wheel);

}

wheel(-1,-1.5);
wheel(1,-1.5);
wheel(-1,1.5);
wheel(1,1.5);

scene.add(car);

return car;

}
