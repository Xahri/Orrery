import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import { PointLightHelper } from "three";

export default function Lights() {
  const ref = useRef();
  const refP = useRef();

   useHelper(ref, DirectionalLightHelper);
   useHelper(refP, PointLightHelper);

  return (
    <group>
      
        <ambientLight intensity={0.4} />

        <pointLight
            ref={refP}
            position={[40, 30, -20]}
            intensity={2}
            color={"white"}
            // color={"#FFE0BB"}
            // castShadow
            // shadowMapSizeHeight={512 * 1}
            // shadowMapSizeWidth={512 * 1}
        />

    </group>
  );
}