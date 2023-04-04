import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeCube = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Create the scene
      const scene = new THREE.Scene();
      // Create the camera
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      // Set the camera position
      camera.position.z = 2;
      // Create the renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      // Set the renderer size
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      // Add the renderer to the container
      containerRef.current.appendChild(renderer.domElement);
      // Create the cube
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      // Add the cube to the scene
      scene.add(cube);
      // Animate the cube
      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    }
  }, []);

  return <div ref={containerRef} className='w-48 h-48'></div>;
};

export default ThreeCube;
