import React, { useRef } from 'react';
import type { Mesh } from 'three';

import style from 'styles/components/subHeader.module.scss';
import Box from './box';
import { Canvas, useFrame } from '@react-three/fiber';

type Props = { text: String };

function SubHeader(props: Props) {
  function Cube2({ position = [0, 0, 0] }: { position?: number[] }) {
    const cubeRef2 = useRef<Mesh>(null);

    useFrame(() => {
      const cube = cubeRef2.current;
      if (!cube) return;
      cube.rotation.y += 0.003;
    });
    return (
      <mesh ref={cubeRef2} position={[position[0], position[1], position[2]]}>
        <boxBufferGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial color="white" />
      </mesh>
    );
  }

  return (
    <div className={`${style.hero}`}>
      <div className={`container`}>
        <h2 className={style.title}>{props.text}</h2>
      </div>
      <div className={style.canvas}>
        <Canvas
          camera={{
            fov: 65,
            near: 0.1,
            far: 1000,
            position: [1, 0, 5],
          }}
        >
          <Cube2 position={[0, 0, 0]} />
          <directionalLight position={[1, 1, 1]} intensity={0.8} />
          <ambientLight args={[0xffffff]} intensity={0.2} />
        </Canvas>
      </div>
    </div>
  );
}

export default SubHeader;
