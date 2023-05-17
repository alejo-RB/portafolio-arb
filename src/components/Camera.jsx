/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 camera.gltf --transform
Author: Kenkento3D (https://sketchfab.com/kenkento.zapater)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/leica-m6-8bba2917f2634e91ab04b92ff20baa4b
Title: Leica M6
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/camera-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-2.5, 0.9, 0.51]} scale={0.5}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.leica_black} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.leather} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.viewfinder} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['2nd_viewfinder']} />
      </group>
      <mesh geometry={nodes.Object_9.geometry} material={materials.summicron} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.focus_ring} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.f_ring} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.front_element} />
      <mesh geometry={nodes.Object_14.geometry} material={materials['flash.001']} position={[-0.84, 0, 2.44]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.flash} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.R_metal} position={[0.43, 2.17, -0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.09, 0.02, 0.09]} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.leica} position={[-0.84, 2.74, -0.05]} rotation={[-Math.PI / 2, -1.22, 0]} scale={[0.17, 0.02, 0.17]} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.R_metal} position={[-2.3, 1.52, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.15} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.material} position={[1.49, 2.03, 0.5]} rotation={[0, 0, -Math.PI / 2]} scale={[1.33, 1.2, 1.33]} />
    </group>
  )
}

useGLTF.preload('/camera-transformed.glb')
