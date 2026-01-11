'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Float, 
  MeshDistortMaterial, 
  PerspectiveCamera, 
  OrbitControls, 
  Stars, 
  Text,
  Sphere,
  Torus,
  Box,
  Environment,
  Lightformer,
  RandomizedLight,
  AccumulativeShadows,
  RandomizedTexture
} from '@react-three/drei';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';

function ImpossibleShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshDistortMaterial>(null);

  useFrame((state) => {
    if (!meshRef.current || !materialRef.current) return;
    
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.3;
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.rotation.z = time * 0.1;
    
    // Dynamic distortion
    materialRef.current.distort = 0.3 + Math.sin(time * 2) * 0.1;
    materialRef.current.speed = 2 + Math.cos(time * 1.5) * 0.5;
    
    // Subtle floating motion
    meshRef.current.position.y = Math.sin(time * 0.8) * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.2}>
        <octahedronGeometry args={[2, 2]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#00ffff"
          speed={2}
          distort={0.4}
          radius={1}
          emissive="#00ffff"
          emissiveIntensity={0.3}
          wireframe={false}
          transparent
          opacity={0.8}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function OrbitalRings() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    groupRef.current.rotation.y = time * 0.1;
    groupRef.current.rotation.z = Math.cos(time * 0.2) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <Torus args={[3, 0.05, 16, 100]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#00ffff" 
            emissive="#00ffff" 
            emissiveIntensity={0.2}
            metalness={0.9}
            roughness={0.1}
          />
        </Torus>
      </Float>
      
      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.3} rotation={[0, 0, Math.PI / 2]}>
        <Torus args={[3, 0.03, 16, 100]} position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#8b5cf6" 
            emissiveIntensity={0.15}
            metalness={0.9}
            roughness={0.1}
          />
        </Torus>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.4} rotation={[0, 0, Math.PI / 2]}>
        <Torus args={[3, 0.02, 16, 100]} position={[0, 0, 0]} rotation={[0, Math.PI / 3, 0]}>
          <meshStandardMaterial 
            color="#a78bfa" 
            emissive="#a78bfa" 
            emissiveIntensity={0.1}
            metalness={0.9}
            roughness={0.1}
          />
        </Torus>
      </Float>
    </group>
  );
}

function FloatingParticles() {
  const count = 50;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const time = state.clock.getElapsedTime();
    particlesRef.current.rotation.y = time * 0.05;
    particlesRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function AdvancedLighting() {
  const { scene } = useThree();
  
  useEffect(() => {
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.02);
    return () => {
      scene.fog = null;
    };
  }, [scene]);

  return (
    <>
      <ambientLight intensity={0.3} color="#4a5568" />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffff" distance={20} decay={2} />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" distance={15} decay={2} />
      <pointLight position={[0, 10, -5]} intensity={0.8} color="#a78bfa" distance={12} decay={2} />
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color="#00ffff"
        castShadow
      />
    </>
  );
}

function EnhancedCamera() {
  const { camera } = useThree();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    camera.position.x = Math.sin(time * 0.1) * 0.5;
    camera.position.y = Math.cos(time * 0.15) * 0.3;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function StarField() {
  return (
    <Stars 
      radius={300} 
      depth={100} 
      count={8000} 
      factor={6} 
      saturation={0} 
      fade 
      speed={0.5}
    />
  );
}

function HolographicText() {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!textRef.current) return;
    const time = state.clock.getElapsedTime();
    textRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
  });

  return (
    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <Text
        position={[0, -3, -2]}
        ref={textRef}
        fontSize={0.8}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
      >
        HACKER'S ARSENAL
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#00ffff" 
          emissiveIntensity={0.2}
          transparent
          opacity={0.7}
        />
      </Text>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
        dpr={[1, 2]}
      >
        <AdvancedLighting />
        <EnhancedCamera />
        <StarField />
        <ImpossibleShape />
        <OrbitalRings />
        <FloatingParticles />
        <HolographicText />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableDamping
          dampingFactor={0.05}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
