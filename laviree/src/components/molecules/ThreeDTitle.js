// src/ThreeDTitle.js

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Text3D, OrbitControls, PerspectiveCamera } from '@react-three/drei';

const ThreeDTitle = () => {
  const lineHeight = 2.3;

  return (
    <div style={{ height: '50%', width: '50%' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[10, -5, 12]} fov={40} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <directionalLight position={[-5, 5, 5]} intensity={1} />
        <group position={[-2, -1, 0]} rotation={[0, -0.1, 0.1]}>
          <mesh position={[0.5, lineHeight * 1.5, 0]} scale={[1, 1, 1]}>
            <Text3D
              font={'/fonts/helvetiker_regular.typeface.json'}
              size={2}
              height={0.5}
              bevelEnabled={true}
              bevelThickness={0.4}
              bevelSize={0.2}
              bevelOffset={0}
              bevelSegments={5}
            >
              LA
              <meshStandardMaterial attach="material" color="rgb(0, 255, 170)" />
            </Text3D>
          </mesh>
          <mesh position={[0, lineHeight * 0.5, 0]} scale={[1, 1, 1]}>
            <Text3D
              font={'/fonts/helvetiker_regular.typeface.json'}
              size={2}
              height={0.5}
              bevelEnabled={true}
              bevelThickness={0.4}
              bevelSize={0.2}
              bevelOffset={0}
              bevelSegments={5}
            >
              VI
              <meshStandardMaterial attach="material" color="rgb(0, 255, 170)" />
            </Text3D>
          </mesh>
          <mesh position={[0.5, lineHeight * -0.5, 0]} scale={[1, 1, 1]}>
            <Text3D
              font={'/fonts/helvetiker_regular.typeface.json'}
              size={2}
              height={0.5}
              bevelEnabled={true}
              bevelThickness={0.4}
              bevelSize={0.2}
              bevelOffset={0}
              bevelSegments={5}
            >
              RE
              <meshStandardMaterial attach="material" color="rgb(0, 255, 170)" />
            </Text3D>
          </mesh>
          <mesh position={[2.5, lineHeight * -1.5, 0]} scale={[1, 1, 1]}>
            <Text3D
              font={'/fonts/helvetiker_regular.typeface.json'}
              size={2}
              height={0.5}
              bevelEnabled={true}
              bevelThickness={0.4}
              bevelSize={0.2}
              bevelOffset={0}
              bevelSegments={5}
            >
              E
              <meshStandardMaterial attach="material" color="rgb(0, 255, 170)" />
            </Text3D>
          </mesh>
        </group>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeDTitle;
