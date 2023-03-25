import React, { useRef } from 'react'

function Player() {
  const object = useRef()

  return <group>

    <mesh
      castShadow
      ref={object}
      position={[0 , 2, 0 ]}
      scale={[2,4,2]}
    >

        <boxGeometry/>
        <meshStandardMaterial/>

    </mesh>

  </group>
}

export default Player