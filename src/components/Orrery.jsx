import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls, button } from 'leva'
import * as THREE from 'three'

export function Orrery() {

    const { scene } = useGLTF('/Orrery.glb')
    console.log(scene);

    const [SunMat] = useState(() => new THREE.TextureLoader().load('/sun1.png'))
    const [MercuryMat] = useState(() => new THREE.TextureLoader().load('/mercury1.png'))
    const [VenusMat] = useState(() => new THREE.TextureLoader().load('/venus1.png'))
    const [EarthMat] = useState(() => new THREE.TextureLoader().load('/earth1.png'))
    const [MarsMat] = useState(() => new THREE.TextureLoader().load('/mars1.png'))
    const [JupiterMat] = useState(() => new THREE.TextureLoader().load('/jupiter1.png'))
    const [SaturnMat] = useState(() => new THREE.TextureLoader().load('/saturn1.png'))
    const [UranusMat] = useState(() => new THREE.TextureLoader().load('/uranus1.png'))
    const [NeptuneMat] = useState(() => new THREE.TextureLoader().load('/neptune1.png'))
    const [PlutoMat] = useState(() => new THREE.TextureLoader().load('/pluto1.png'))

    const { TimeAndSpeed } = useControls({                    // mercuryTime
      TimeAndSpeed: { value: 4, min: 1, max: 60, step: .1 }
    })

    useControls({
      screenshot: button(() => {
        // Create a new link element
        const link = document.createElement('a')
    
        // Set the download attribute of the link to "canvas.png"
        link.setAttribute('download', 'canvas.png')
    
        // Replacing 'image/png' with 'image/octet-stream'
        // Makes the browser download the image file instead of showing it in a new tab
        link.setAttribute('href', document.querySelector('canvas').toDataURL('image/octet-stream'))
    
        // Trigger a click on the link to start the download
        link.click()
      })
    });
    

    const refMercury = useRef();
    const refVenus = useRef();
    const refEarth = useRef();
    const refMars = useRef();
    const refJupiter = useRef();
    const refSaturn = useRef();
    const refUranus = useRef();
    const refNeptune = useRef();
    const refPluto = useRef();

    let mercury_PI_Multiplier = 2;
    let venus_PI_Multiplier = 2;
    let earth_PI_Multiplier = 2;
    let mars_PI_Multiplier = 2;
    let jupiter_PI_Multiplier = 2;
    let saturn_PI_Multiplier = 2;
    let uranus_PI_Multiplier = 2;
    let neptune_PI_Multiplier = 2;
    let pluto_PI_Multiplier = 2;

    useFrame((state) => {

      let t = state.clock.getElapsedTime();

      refMercury.current.rotation.set(0, t * (TimeAndSpeed * 1), 0);
      if (t * TimeAndSpeed >= Math.PI * mercury_PI_Multiplier) {
        console.log("Mercury rotation");
        mercury_PI_Multiplier += 2;
        document.getElementById("Mercury").innerText = "Mercury — " + (mercury_PI_Multiplier - 2) / 2 + " Years";
      }
      else if (t * TimeAndSpeed < Math.PI * 2) {
        document.getElementById("Mercury").innerText = "Mercury — 0";
      }

      refVenus.current.rotation.set(0, t * (TimeAndSpeed * 0.4), 0);
      if (t * (TimeAndSpeed * 0.4) >= Math.PI * venus_PI_Multiplier) {
        console.log("Venus rotation");
        venus_PI_Multiplier += 2;
        document.getElementById("Venus").innerText = "Venus — " + (venus_PI_Multiplier - 2) / 2 + " Years";
      }
      else if (t * (TimeAndSpeed * 0.4) < Math.PI * 2) {
        document.getElementById("Venus").innerText = "Venus — 0";
      }

      refEarth.current.rotation.set(0, t * (TimeAndSpeed * 0.24), 0);
      if (t * (TimeAndSpeed * 0.24) >= Math.PI * earth_PI_Multiplier) {
        console.log("Earth rotation");
        earth_PI_Multiplier += 2;
        document.getElementById("Earth").innerText = "Earth — " + (earth_PI_Multiplier - 2) / 2 + " Years";
      }
      else if (t * (TimeAndSpeed * 0.24) < Math.PI * 2) {
        document.getElementById("Earth").innerText = "Earth — 0";
      }

      refMars.current.rotation.set(0, t * (TimeAndSpeed * 0.128), 0);
      if (t * (TimeAndSpeed * 0.128) >= Math.PI * mars_PI_Multiplier) {
        console.log("Mars rotation");
        mars_PI_Multiplier += 2;
        document.getElementById("Mars").innerText = "Mars — " + (mars_PI_Multiplier - 2) / 2 + " Years";
      }
      else if (t * (TimeAndSpeed * 0.128) < Math.PI * 2) {
        document.getElementById("Mars").innerText = "Mars — 0";
      }

      refJupiter.current.rotation.set(0, t * (TimeAndSpeed * 0.02), 0);
      if (t * (TimeAndSpeed * 0.02) >= Math.PI * jupiter_PI_Multiplier) {
        console.log("Jupiter rotation");
        jupiter_PI_Multiplier += 2;
        document.getElementById("Jupiter").innerText = "Jupiter — " + (jupiter_PI_Multiplier - 2) / 2 + " Years";
      }
      else if (t * (TimeAndSpeed * 0.02) < Math.PI * 2) {
        document.getElementById("Jupiter").innerText = "Jupiter — 0";
      }

      refSaturn.current.rotation.set(0, t * (TimeAndSpeed * 0.008), 0);
      if (t * (TimeAndSpeed * 0.008) >= Math.PI * saturn_PI_Multiplier) {
        console.log("Saturn rotation");
        saturn_PI_Multiplier += 2;
        document.getElementById("Saturn").innerText = "Saturn — " + (saturn_PI_Multiplier - 2) / 2 + " Years";
      }
      else if (t * (TimeAndSpeed * 0.008)  < Math.PI * 2) {
        document.getElementById("Saturn").innerText = "Saturn — 0";
      }

      refUranus.current.rotation.set(0, t * (TimeAndSpeed * 0.0028), 0);
      if (t * (TimeAndSpeed * 0.0028) >= Math.PI * uranus_PI_Multiplier) {
        console.log("Uranus rotation");
        uranus_PI_Multiplier += 2;
        document.getElementById("Uranus").innerText = "Uranus — " + (uranus_PI_Multiplier - 2) / 2 + " Years";
      }
      else if (t * (TimeAndSpeed * 0.0028)  < Math.PI * 2) {
        document.getElementById("Uranus").innerText = "Uranus — 0";
      }

      refNeptune.current.rotation.set(0, t * (TimeAndSpeed * 0.0014), 0);
      if (t * (TimeAndSpeed * 0.0014) >= Math.PI * neptune_PI_Multiplier) {
        console.log("Neptune rotation");
        neptune_PI_Multiplier += 2;
        document.getElementById("Neptune").innerText = "Neptune — " + (neptune_PI_Multiplier - 2) / 2 + " Years";
      }
      else if (t * (TimeAndSpeed * 0.0014)  < Math.PI * 2) {
        document.getElementById("Neptune").innerText = "Neptune — 0";
      }

      refPluto.current.rotation.set(0, t * (TimeAndSpeed * 0.001), 0);
      if (t * (TimeAndSpeed * 0.001) >= Math.PI * pluto_PI_Multiplier) {
        console.log("Pluto rotation");
        pluto_PI_Multiplier += 2;
        document.getElementById("Pluto").innerText = "Pluto — " + (pluto_PI_Multiplier - 2) / 2 + " Years";
      }
      else if (t * (TimeAndSpeed * 0.001)  < Math.PI * 2) {
        document.getElementById("Pluto").innerText = "Pluto — 0";
      }
    })

    const StaticGroup = () => {
      return (
        <>
          <mesh geometry={scene.children[24].geometry} castShadow receiveShadow >
            <meshStandardMaterial color={"black"} />
          </mesh>
          <mesh geometry={scene.children[25].geometry} castShadow receiveShadow >
            <meshStandardMaterial color={"black"} />
          </mesh>
          <mesh geometry={scene.children[21].geometry} castShadow receiveShadow >
            <meshMatcapMaterial matcap={SunMat} />
          </mesh>
        </>
      )
    }

    const BigRings = () => {
      return (
        <>
          {/* Mercury */}
          <mesh geometry={scene.children[8].geometry} castShadow receiveShadow ref={refMercury}>
            <meshStandardMaterial color={"black"} />
            <mesh geometry={scene.children[11].geometry} castShadow receiveShadow >
              <meshMatcapMaterial matcap={MercuryMat} />
            </mesh>
          </mesh>
          {/* Venus */}
          <mesh geometry={scene.children[7].geometry} castShadow receiveShadow ref={refVenus}>
            <meshStandardMaterial color={"black"} />
            <mesh geometry={scene.children[13].geometry} castShadow receiveShadow >
              <meshMatcapMaterial matcap={VenusMat} />
            </mesh>
          </mesh>
          {/* Earth */}
          <mesh geometry={scene.children[6].geometry} castShadow receiveShadow ref={refEarth}>
            <meshStandardMaterial color={"black"} />
            <mesh geometry={scene.children[15].geometry} castShadow receiveShadow >
              <meshMatcapMaterial matcap={EarthMat} />
            </mesh>
          </mesh>
          {/* Mars */}
          <mesh geometry={scene.children[5].geometry} castShadow receiveShadow ref={refMars}>
            <meshStandardMaterial color={"black"} />
            <mesh geometry={scene.children[17].geometry} castShadow receiveShadow >
              <meshMatcapMaterial matcap={MarsMat} />
            </mesh>
          </mesh>
          {/* Jupiter */}
          <mesh geometry={scene.children[4].geometry} castShadow receiveShadow ref={refJupiter}>
            <meshStandardMaterial color={"black"} />
            <mesh geometry={scene.children[19].geometry} castShadow receiveShadow >
              <meshMatcapMaterial matcap={JupiterMat} />
            </mesh>
          </mesh>
          {/* Saturn */}
          <mesh geometry={scene.children[3].geometry} castShadow receiveShadow ref={refSaturn}>
            <meshStandardMaterial color={"black"} />
            <mesh geometry={scene.children[9].geometry} castShadow receiveShadow >
              <meshMatcapMaterial matcap={SaturnMat} />
            </mesh>
            {/* Saturn Belt */}
            <mesh geometry={scene.children[30].geometry} castShadow receiveShadow >
              <meshMatcapMaterial matcap={JupiterMat} />
            </mesh>
          </mesh>
          {/* Uranus */}
          <mesh geometry={scene.children[2].geometry} castShadow receiveShadow ref={refUranus}>
            <meshStandardMaterial color={"black"} />
            <mesh geometry={scene.children[22].geometry} castShadow receiveShadow >
              <meshMatcapMaterial matcap={UranusMat} />
            </mesh>
          </mesh>
          {/* Neptune */}
          <mesh geometry={scene.children[1].geometry} castShadow receiveShadow ref={refNeptune}>
            <meshStandardMaterial color={"black"} />
            <mesh geometry={scene.children[26].geometry} castShadow receiveShadow >
              <meshMatcapMaterial matcap={NeptuneMat} />
            </mesh>
          </mesh>
          {/* Pluto */}
          <mesh geometry={scene.children[0].geometry} castShadow receiveShadow ref={refPluto}>
            <meshStandardMaterial color={"black"} />
            <mesh geometry={scene.children[28].geometry} castShadow receiveShadow >
              <meshMatcapMaterial matcap={PlutoMat} />
            </mesh>
          </mesh>
        </>
      )
    }
  
    return (
      <group >

        <StaticGroup />
        <BigRings />

      </group>
    )
}

useGLTF.preload('/Orrery.glb')