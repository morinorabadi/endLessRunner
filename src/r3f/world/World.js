import React from 'react'

// components
import Line from './Line'

function World(props) {

  return  <group {...props} >

      {/* end helper */}
      <mesh position={[0,0,50]}>
        <boxGeometry/>
        <meshStandardMaterial color={"red"} />
      </mesh>

      {/* lines */}
      <Line color="red" position-x={5} />
      <Line color="green" position-x={0} />
      <Line color="blue" position-x={-5} />
    
    </group>
}

export default World