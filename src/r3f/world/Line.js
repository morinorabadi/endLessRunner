import React from 'react'

function Line(props) {
  return <mesh 
        {...props}
        scale={[4.8, 100, 1]} 
        rotation-x={- Math.PI / 2}
        receiveShadow
    >

        <planeGeometry/>
        <meshStandardMaterial color={props.color} />

    </mesh>

}

export default Line