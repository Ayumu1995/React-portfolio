import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import vertexShader from "./shaders/vertexShader";
import fragmentShader from "./shaders/fragmentShader";
import ReflectorPlane from "./ReflectorPlane";

function ShaderSphere({ phase, hasPassedTech }) {
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
            transparent: false,
            depthWrite: true,
         }),
      []
   );
   useFrame(({ clock, size, camera }) => {
      shaderMaterial.uniforms.uTime.value = clock.getElapsedTime(); // 時間経過を毎フレーム更新
      shaderMaterial.uniforms.uResolution.value.set(size.width, size.height);
      shaderMaterial.uniforms.uCameraPosition.value.copy(camera.position);
   });

   useFrame(() => {
      if (meshRef.current) {
         let targetX = 0,
            targetY = 0;
         let targetScale = hasPassedTech ? 3 : 1;

         // phaseに応じた位置設定
         if (phase === "tech") {
            targetX = 6.0;
         } else if (phase === "exp") {
            targetX = -6.0;
         } else if (phase === "contact") {
            targetY = -4.5;
         } else if (phase === "idle") {
            // 🔁 一番上に戻ったとき：中央に戻す
            targetX = 0;
            targetY = 0;
         }

         // 補間アニメーション
         meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
         meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;

         meshRef.current.scale.setScalar(
            meshRef.current.scale.x + (targetScale - meshRef.current.scale.x) * 0.05
         );
      }
   });

   return (
      <mesh ref={meshRef}>
         <sphereGeometry args={[1.5, 128, 128]} />
         <primitive object={shaderMaterial} attach="material" />
      </mesh>
   );
}

export default function Background3D({ phase, hasPassedTech }) {
   return (
      <Canvas
         style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100vw",
            height: "100vh",
            // pointerEvents: "none",
         }}
         camera={{ position: [0, 1, 5], fov: 75 }}
      >
         <ambientLight />
         <directionalLight position={[5, 5, 5]} intensity={1.2} />
         <ShaderSphere phase={phase} hasPassedTech={hasPassedTech} />
         {/* <ReflectorPlane visible={phase === "idle"} /> */}
         <ReflectorPlane visible={true} />
      </Canvas>
   );
}
