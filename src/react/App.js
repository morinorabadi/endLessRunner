import React from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from '../r3f/Scene'

function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [0,10,-20] }}
    >
      <Scene/>
    </Canvas>
  )
}

export default  App