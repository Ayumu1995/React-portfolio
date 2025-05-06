import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import vertexShader from "./shaders/vertexShader";
import fragmentShader from "./shaders/fragmentShader";
function ShaderSphere() {
   const meshRef = useRef();

   const shaderMaterial = useMemo(
      () =>
         new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
               uTime: { value: 0 },
               uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
               uCameraPosition: { value: new THREE.Vector3() },
            },
            side: THREE.DoubleSide,
         }),
      []
   );

   useFrame(({ clock, size, camera }) => {
      shaderMaterial.uniforms.uTime.value = clock.getElapsedTime();
      shaderMaterial.uniforms.uResolution.value.set(size.width, size.height);
      shaderMaterial.uniforms.uCameraPosition.value.copy(camera.position);
   });

   return (
      <mesh ref={meshRef}>
         <sphereGeometry args={[1.5, 128, 128]} />
         <primitive object={shaderMaterial} attach="material" />
      </mesh>
   );
}
export default function Background3D() {
   return (
      <Canvas
         style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
         }}
         camera={{ position: [0, 0, 5], fov: 75 }}
      >
         <ambientLight />
         <ShaderSphere />
      </Canvas>
   );
}
