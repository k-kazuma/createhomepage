import React, {useRef, useState} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

function Cube({position=[0, 0, 0]}: {position?:number[]}) {

  const cubeRef = useRef<Mesh>(null)
  let [translate, setTranslate] = useState(position[1])
  useFrame(() => {
      const cube = cubeRef.current;
      if(!cube) return;
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      setTranslate(translate + 0.01)
      if(translate > 6.2) setTranslate(-5)
  });

  return(
      <mesh ref={cubeRef} position={[position[0], translate, position[2]]}>
          <boxBufferGeometry args={[0.7,0.7, 0.7]}/>
          <meshStandardMaterial 
          color="white" 
          />
          
      </mesh>
  )
}

function Cube2({position=[0, 0, 0]}: {position?:number[]}) {

  const cubeRef2 = useRef<Mesh>(null)
      
      useFrame(() => {
          const cube = cubeRef2.current;
          if(!cube) return;
          cube.rotation.y += 0.003;

      });

  

  return(
      <mesh ref={cubeRef2} position={[position[0], position[1], position[2]]}>
          <boxBufferGeometry args={[1.9, 1.9, 1.9]}/>
          <meshStandardMaterial 
          color="white" 
          />
          
      </mesh>
  )
}

function Box() {
  return (
    <div id='canvasContainer'>
        <Canvas
            camera={{
                fov:65,
                near:0.1,
                far: 1000,
                position: [1, 0, 5]
            }}
        >   
            <Cube2 position={[0, 0, 0]} />
            <Cube position={[0, 2, -3]}/>
            <Cube position={[1, 2, -4]}/>
            <Cube position={[0, 2, 3]}/>
            <Cube position={[2, 3, -1]}/>
            <Cube position={[2, 3, 3]}/>
            <Cube position={[-2, -1, -1.2]}/>
            <Cube position={[-5, 2, -1]}/>
            <Cube position={[4, 3, 0]}/>
            <directionalLight position={[1, 1, 1]} intensity={0.8} />
            <ambientLight args={[0xffffff]} intensity={0.2} />
        </Canvas>
    </div>
    
  )
}

export default Box