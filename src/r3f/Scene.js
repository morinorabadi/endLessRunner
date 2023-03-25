import React from 'react'
import { OrbitControls, } from '@react-three/drei'

// components
import Player from './player/Player'
import World from './world/World'

function Scene() {

  return <>
      {/* <OrbitControls/> */}

      <fog attach="fog" args={["#333", 50, 100]} />

      {/* lights */}
      <ambientLight intensity={0.4} />
      <directionalLight
        intensity={0.8}
        castShadow
        position={[1,10,-3]}
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />

      {/* meshes */}
      <Player/>
      <World position-z={100} />
      <World/>
      <World position-z={200}/>
  </>
}

export default Scene