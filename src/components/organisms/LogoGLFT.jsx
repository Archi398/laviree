import React, { useEffect }  from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import styles from '../../styles/ThreeDTitle.module.css';

const GLTFModel = () => {
  const { scene } = useGLTF('/3D/grand_logo.gltf');

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set('#0034CE');
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={30} position={[0, 0, 2]} />;
};

const LogoGLFT = () => {
  let fov = 70;
  if (window.matchMedia('(max-width: 400px)').matches) {
    fov = 110;
  }else if (window.matchMedia('(max-width: 768px)').matches) {
    fov = 90;
  }

  return (
    <div className={styles.container}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[5, -2, 12]} fov={fov} />
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <directionalLight position={[-3, 1, 6]} intensity={10} />

        <GLTFModel />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default LogoGLFT;
