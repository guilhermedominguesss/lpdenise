"use client";

import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

const LiquidBackground = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
  }), []);

  useFrame((state) => {
    const { clock, mouse } = state;
    if (meshRef.current) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = clock.getElapsedTime();
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uMouse.value.lerp(mouse, 0.05);
    }
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        transparent
        uniforms={uniforms}
        vertexShader={`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`}
        fragmentShader={`
          uniform float uTime; uniform vec2 uMouse; varying vec2 vUv;
          void main() {
            vec2 uv = vUv; float t = uTime * 0.15;
            vec2 m = uMouse * 0.1;
            float color = smoothstep(0.0, 1.0, (sin(uv.x * 8.0 + t + m.x * 12.0) + sin(uv.y * 6.0 - t + m.y * 12.0)) * 0.5 + 0.5);
            gl_FragColor = vec4(mix(vec3(0.85, 0.81, 0.78), vec3(0.69, 0.53, 0.51), color), 1.0);
          }
        `}
      />
    </mesh>
  );
};

const FloatingOrb = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[10, 1]} />
        <MeshDistortMaterial 
          color="#AF8883" 
          speed={2} 
          distort={0.3} 
          roughness={0.2} 
          metalness={0.8}
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
};

interface ExperienceHeroProps {
  children?: React.ReactNode;
}

export const ExperienceHero = ({ children }: ExperienceHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(revealRef.current, 
        { filter: "blur(20px)", opacity: 0, scale: 1.02 },
        { filter: "blur(0px)", opacity: 1, scale: 1, duration: 1.8, ease: "expo.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 50], fov: 35 }}>
          <ambientLight intensity={0.6} />
          <spotLight position={[30, 30, 30]} intensity={1.5} color="#C5A059" />
          <pointLight position={[-20, -20, -20]} intensity={0.5} color="#AF8883" />
          <LiquidBackground />
          <FloatingOrb />
        </Canvas>
      </div>

      <div ref={revealRef} className="relative z-10 w-full min-h-screen">
        {children}
      </div>
    </section>
  );
};

export default ExperienceHero;
