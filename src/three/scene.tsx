import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

interface Props {
  children?: React.ReactNode;
}

export default function Scene({ children }: Props) {
  return (
    <Canvas
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        background: "black",
      }}
      gl={{ antialias: false }}
      eventPrefix="client"
    >
      {children}
      <Preload all />
      <Perf />
    </Canvas>
  );
}
