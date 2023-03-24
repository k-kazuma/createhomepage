import React, { useRef, useState } from 'react'
import type { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

export const Cube = ({position}: {position: number[]}) => {

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