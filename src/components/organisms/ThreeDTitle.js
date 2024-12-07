import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Text3D, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

import VIREE_Regular from '../../assets/fonts/VIREE_Regular.json';
// import minion from '../../assets/fonts/Minion Pro_Regular.json';

const ThreeDTitle = () => {
  const lineHeight = 2.3;

  const Circle = ({ position }) => {
    const shape = new THREE.Shape();
    const innerRadius = 4.5;
    const outerRadius = 4.6;
  
    // Define the smooth outer circle
    shape.absarc(0, 0, outerRadius, 0, Math.PI * 2, false);
  
    // Define the smooth inner circle (hole)
    const hole = new THREE.Path();
    hole.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
    shape.holes.push(hole);
  
    return (
      <mesh position={position}>
        <extrudeGeometry
          args={[
            shape,
            {
              depth: 0.6, // Thickness of the 3D ring
              bevelEnabled: false, // Disable bevel for a cleaner look
              curveSegments: 128, // Increase segments for smoothness
            },
          ]}
        />
        <meshStandardMaterial attach="material" color="#c38fbe" metalness={0.3} roughness={0.5} />
      </mesh>
    );
  };

  const WavyCircle = ({ position }) => {
    const segments = 128; // Higher value for smoother wave
    const outerRadius = 4.3;
    const innerRadius = 4.2;
    const amplitude = 0.2; // Amplitude of the wave
    const frequency = 5; // Frequency of the wave
  
    // Create the wavy outer shape
    const shape = new THREE.Shape();
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const wave = Math.sin(angle * frequency) * amplitude; // Create wave effect
      const x = (outerRadius + wave) * Math.cos(angle);
      const y = (outerRadius + wave) * Math.sin(angle);
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
  
    // Create the wavy inner hole
    const hole = new THREE.Path();
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const wave = Math.sin(angle * frequency) * amplitude;
      const x = (innerRadius + wave) * Math.cos(angle);
      const y = (innerRadius + wave) * Math.sin(angle);
      if (i === 0) hole.moveTo(x, y);
      else hole.lineTo(x, y);
    }
    shape.holes.push(hole);
  
    return (
      <mesh position={position}>
        <extrudeGeometry
          args={[
            shape,
            {
              depth: 0.6, // Thickness of the wavy ring
              bevelEnabled: false,
              curveSegments: segments,
            },
          ]}
        />
        <meshStandardMaterial attach="material" color="#c38fbe" />
      </mesh>
    );
  };

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
              font={VIREE_Regular}
              size={2}
              height={0.5}
              bevelEnabled={true}
              bevelThickness={0.4}
              bevelSize={0.2}
              bevelOffset={0}
              bevelSegments={5}
            >
              LA
              <meshStandardMaterial attach="material" color="#c38fbe" />
            </Text3D>
          </mesh>
          <mesh position={[0, lineHeight * 0.5, 0]} scale={[1, 1, 1]}>
            <Text3D
              font={VIREE_Regular}
              size={2}
              height={0.5}
              bevelEnabled={true}
              bevelThickness={0.4}
              bevelSize={0.2}
              bevelOffset={0}
              bevelSegments={5}
            >
              VI
              <meshStandardMaterial attach="material" color="#c38fbe" />
            </Text3D>
          </mesh>
          <mesh position={[0.5, lineHeight * -0.5, 0]} scale={[1, 1, 1]}>
            <Text3D
              font={VIREE_Regular}
              size={2}
              height={0.5}
              bevelEnabled={true}
              bevelThickness={0.4}
              bevelSize={0.2}
              bevelOffset={0}
              bevelSegments={5}
            >
              RÉ
              <meshStandardMaterial attach="material" color="#c38fbe" />
            </Text3D>
          </mesh>
          <mesh position={[2.5, lineHeight * -1.5, 0]} scale={[1, 1, 1]}>
            <Text3D
              font={VIREE_Regular}
              size={2}
              height={0.5}
              bevelEnabled={true}
              bevelThickness={0.4}
              bevelSize={0.2}
              bevelOffset={0}
              bevelSegments={5}
            >
              E
              <meshStandardMaterial attach="material" color="#c38fbe" />
            </Text3D>
          </mesh>
        </group>

        <Circle position={[0.5, 0.5, -1]} />
        <WavyCircle position={[0.5, 0.5, -1]} />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeDTitle;
