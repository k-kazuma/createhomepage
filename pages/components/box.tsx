import React from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import {Cube} from './cube'
import {Cube2} from './cube2'

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