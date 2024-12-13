import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Text3D, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import styles from '../../styles/ThreeDTitle.module.css';

import VIREE_Regular from '../../assets/fonts/VIREE_Regular.json';
// import minion from '../../assets/fonts/Minion Pro_Regular.json';
// import Inter_Bold from '../../assets/fonts/Inter_Bold.json';

const ThreeDTitle = () => {
  const lineHeight = 2.3;
  const fov = window.matchMedia("(max-width: 768px)").matches ? 80 : 60;

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
    const outerRadius = 4.3; // Increased size
    const innerRadius = 4.2; // Increased size
    const frequency = 10; // Frequency of the wave
    const amplitudeRange = { min: 0, max: 0.4 }; // Define range for random amplitudes

    // Generate random amplitudes for each 10 waves
    const randomAmplitudes = Array.from({ length: frequency }, () =>
      Math.random() * (amplitudeRange.max - amplitudeRange.min) + amplitudeRange.min
    );

    // Function to get amplitude for a given angle
    const getAmplitude = (angle) => {
      const waveIndex = Math.floor((angle / (Math.PI * 2)) * frequency);
      return randomAmplitudes[waveIndex % frequency];
    };

    // Create the wavy outer shape
    const shape = new THREE.Shape();
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const amplitude = getAmplitude(angle);
      const wave = Math.sin(angle * frequency) * amplitude;
      const x = (outerRadius + wave) * Math.cos(angle);
      const y = (outerRadius + wave) * Math.sin(angle);
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }

    // Create the wavy inner hole
    const hole = new THREE.Path();
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const amplitude = getAmplitude(angle);
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
        <meshStandardMaterial
          attach="material"
          color="#c38fbe"
          opacity={0.6} // Reduced opacity
          transparent={true} // Allow transparency
        />
      </mesh>
    );
  };

  const StyledText = ({ text, position }) => (
    <mesh position={position} scale={[1, 1, 1]}>
      <Text3D
        font={VIREE_Regular}
        size={2}
        height={0.5}
        bevelEnabled={true}
        bevelThickness={0.6}
        bevelSize={0.1}
        bevelSegments={5}
        material={[
          new THREE.MeshStandardMaterial({
            color: '#ffffff',
            side: THREE.DoubleSide
          }),
          new THREE.MeshStandardMaterial({
            color: '#c38fbe',
            side: THREE.DoubleSide
          })
        ]}
      >
        {text}
      </Text3D>
    </mesh>
  );

  return (
    <div className={styles.container}>
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[5, -2, 12]} fov={fov} />
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <directionalLight position={[-5, 5, 5]} intensity={10} />
        <group position={[-2.5, -2, 0]} rotation={[0, -0.1, 0.1]}>

          <StyledText text="LA" position={[0.5, lineHeight * 1.5, 0]} />

          <StyledText text="VI" position={[0, lineHeight * 0.5, 0]} />

          <StyledText text="RÉ" position={[0.5, lineHeight * -0.5, 0]} />

          <StyledText text="E" position={[2.5, lineHeight * -1.5, 0]} />

        </group>

        <Circle position={[-0.5, -1, -1]} />
        <WavyCircle position={[-0.5, -1, -1]} />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeDTitle;
