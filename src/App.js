import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Environment, Loader, Stars, Stats } from '@react-three/drei'
import { Orrery } from './components/Orrery'
import { Overlay } from './components/Overlay'
import { Years } from './components/Years'
import Lights from './components/Lights'

export default function App() {

  return (
    <>
      
      <Canvas shadows gl={{ preserveDrawingBuffer: true, antialias: true, physicallyCorrectLights: true, toneMappingExposure: 1, }} camera={{ position: [5, 2, 4], fov: 25 }} orthographic={false} >
        <Suspense fallback={null}>
          <Orrery />
        </Suspense>

        <Lights />
        <Stars radius={400} depth={50} count={1000} factor={12} />
        <Stats />
        
        <OrbitControls enableDamping autoRotate={false} autoRotateSpeed={0.4} enablePan={true} />
        <Environment background files="studio_small_03_1k.hdr" blur={0.4} />
      </Canvas>
      
      <Overlay />
      <Years />
      <Loader />

    </>
  )
}