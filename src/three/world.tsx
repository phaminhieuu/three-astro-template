import { OrbitControls } from "@react-three/drei";
import Scene from "./scene";

export default function World() {
  return (
    <Scene>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    </Scene>
  );
}
