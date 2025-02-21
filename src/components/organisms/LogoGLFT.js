import React, { useEffect }  from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import styles from '../../styles/ThreeDTitle.module.css';

const GLTFModel = () => {
  const { scene } = useGLTF('/3D/grand_logo.gltf');

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set('#fc8bf2');
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={30} position={[0, 0, 2]} />;
};

const LogoGLFT = () => {
  const fov = window.matchMedia("(max-width: 768px)").matches ? 90 : 70;

  return (
    <div className={styles.container}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[5, -2, 12]} fov={fov} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} />
        <directionalLight position={[-3, 1, 6]} intensity={10} />

        <GLTFModel />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default LogoGLFT;
