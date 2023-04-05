import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCube = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // create Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    // render loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // clean up Three.js scene on unmount
    return () => {
      // scene.remove(cube);
      // geometry.dispose();
      // material.dispose();
      // renderer.dispose();
    };
  }, []);

  return (
    <div className='w-3/4 h-3/4'>
      <canvas ref={canvasRef} className='w-full h-full' />
    </div>
  );
};

export default ThreeCube;
