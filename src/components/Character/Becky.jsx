/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 ./public/becky/becky.glb
*/

import { useGLTF } from '@react-three/drei';

export function Becky(props) {
  const { nodes, materials } = useGLTF('/becky/becky.glb');
  return (
    <group
      ref={props.reference}
      {...props}
      // rotation-x={-Math.PI / 2}
      dispose={null}
    >
      <group rotation-x={-Math.PI / 2}>
        <primitive object={nodes.Hips} />

      </group>
    </group>
  );
}

useGLTF.preload('/becky/becky.glb');