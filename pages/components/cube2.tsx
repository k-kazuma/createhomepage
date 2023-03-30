import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, } from 'react'
import type { Mesh } from 'three'

function Cube2({position}: {position: number[]}) {

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

export default Cube2