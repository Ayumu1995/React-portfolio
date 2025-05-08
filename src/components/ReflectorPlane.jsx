import dispTex from "../assets/rock_disp3.png"; // displacement map
import normTex from "../assets/rock_rough3.png"; // normal map
import { MeshReflectorMaterial } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function ReflectorPlane({ visible }) {
   if (!visible) return null;

   const [displacementMap, normalMap] = useTexture([dispTex, normTex]);

   // テクスチャ設定
   [displacementMap, normalMap].forEach((map) => {
      map.wrapS = map.wrapT = THREE.RepeatWrapping;
      map.repeat.set(4, 4);
   });

   return (
      <mesh
         rotation={[-Math.PI / 2 + 0.2, 0, 0]} // ← 10〜15度前傾させる
         position={[0, -2.0, 0]}
         renderOrder={-1}
      >
         <planeGeometry args={[10, 10, 256, 256]} />
         <MeshReflectorMaterial
            displacementMap={displacementMap}
            displacementScale={0.8} // ← 弱くする
            normalMap={normalMap}
            normalScale={[1.0, 1.0]}
            blur={[64, 16]}
            mixBlur={0.2}
            mixStrength={2.5}
            resolution={1024}
            mirror={1.0} // ← 映り込み強め
            color="#bbb"
            roughness={0.15} // ← 鏡面の強調
            metalness={0.6}
         />
      </mesh>
   );
}
