"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Html, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* ----------------------------------------------------------------------- *
 * Config — evenly distributed module nodes on a single tilted orbit
 * ----------------------------------------------------------------------- */
interface NodeData {
  label: string;
  emoji: string;
  color: string;
}

const NODES: NodeData[] = [
  { label: "Fleet", emoji: "🚚", color: "#2B4EFF" },
  { label: "CRM", emoji: "📊", color: "#2ED8A0" },
  { label: "WhatsApp", emoji: "💬", color: "#2B4EFF" },
  { label: "Warranty", emoji: "🛡️", color: "#2ED8A0" },
  { label: "Supply", emoji: "📦", color: "#2B4EFF" },
  { label: "AI", emoji: "🤖", color: "#2ED8A0" },
];

const ORBIT_RADIUS = 3.25;
const ORBIT_TILT = 0.32; // radians — slight axial tilt like a planet

/* ----------------------------------------------------------------------- *
 * Central globe — wireframe Ezupp sphere
 * ----------------------------------------------------------------------- */
function Globe() {
  const wire = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (wire.current) wire.current.rotation.y = t * 0.18;
    if (core.current) core.current.rotation.y = t * 0.12;
  });

  return (
    <group>
      {/* soft gradient core */}
      <mesh ref={core}>
        <sphereGeometry args={[1.15, 64, 64]} />
        <meshStandardMaterial
          color="#2B4EFF"
          roughness={0.35}
          metalness={0.4}
          emissive="#2B4EFF"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* wireframe shell for the "globe" look */}
      <mesh ref={wire}>
        <sphereGeometry args={[1.22, 28, 20]} />
        <meshBasicMaterial
          color="#9CB5FF"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>

      {/* inner teal accent sphere */}
      <mesh scale={0.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#2ED8A0"
          emissive="#2ED8A0"
          emissiveIntensity={1}
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* soft outer halo */}
      <mesh>
        <sphereGeometry args={[1.35, 32, 32]} />
        <meshBasicMaterial color="#2B4EFF" transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

/* ----------------------------------------------------------------------- *
 * Orbit ring — the line that nodes sit on
 * ----------------------------------------------------------------------- */
function OrbitRing() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[ORBIT_RADIUS - 0.008, ORBIT_RADIUS + 0.008, 128]} />
      <meshBasicMaterial
        color="#2B4EFF"
        transparent
        opacity={0.35}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ----------------------------------------------------------------------- *
 * Single node — stays at a fixed angle within the rotating orbit group
 * ----------------------------------------------------------------------- */
function Node({ node, angle }: { node: NodeData; angle: number }) {
  const x = Math.cos(angle) * ORBIT_RADIUS;
  const z = Math.sin(angle) * ORBIT_RADIUS;

  return (
    <group position={[x, 0, z]}>
      {/* glowing marker */}
      <mesh>
        <sphereGeometry args={[0.2, 24, 24]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={1.1}
          roughness={0.25}
          metalness={0.4}
        />
      </mesh>
      {/* outer halo */}
      <mesh>
        <sphereGeometry args={[0.34, 16, 16]} />
        <meshBasicMaterial color={node.color} transparent opacity={0.18} />
      </mesh>

      {/* Billboarded label — always faces camera, never clips neighbours */}
      <Billboard position={[0, -0.55, 0]}>
        <Html center distanceFactor={9}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 10px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.96)",
              boxShadow: "0 6px 18px rgba(8,15,46,0.14)",
              fontFamily:
                "var(--font-jakarta, 'Plus Jakarta Sans'), sans-serif",
              fontSize: 11,
              fontWeight: 800,
              color: "#080F2E",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              userSelect: "none",
              letterSpacing: "-0.005em",
            }}
          >
            <span style={{ fontSize: 13 }}>{node.emoji}</span>
            {node.label}
          </div>
        </Html>
      </Billboard>
    </group>
  );
}

/* ----------------------------------------------------------------------- *
 * Orbit system — nodes + ring rotate together, tilted as a group
 * ----------------------------------------------------------------------- */
function OrbitSystem() {
  const ref = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () =>
      NODES.map((n, i) => ({
        node: n,
        angle: (i / NODES.length) * Math.PI * 2,
      })),
    [],
  );

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.22;
  });

  return (
    <group rotation={[ORBIT_TILT, 0, 0]}>
      <group ref={ref}>
        <OrbitRing />
        {nodes.map(({ node, angle }) => (
          <Node key={node.label} node={node} angle={angle} />
        ))}
      </group>
    </group>
  );
}

/* ----------------------------------------------------------------------- *
 * Secondary vertical orbit — adds depth without clutter
 * ----------------------------------------------------------------------- */
function SecondaryRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.getElapsedTime() * 0.1;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.2, Math.PI / 3, 0]}>
      <ringGeometry args={[3.85, 3.87, 128]} />
      <meshBasicMaterial
        color="#2ED8A0"
        transparent
        opacity={0.22}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ----------------------------------------------------------------------- *
 * Scene contents
 * ----------------------------------------------------------------------- */
function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 6, 5]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-6, -3, -4]} intensity={0.55} color="#2ED8A0" />
      <pointLight position={[6, 4, -3]} intensity={0.45} color="#2B4EFF" />

      <Sparkles
        count={50}
        scale={[9, 6, 9]}
        size={1.6}
        speed={0.25}
        color="#2B4EFF"
        opacity={0.4}
      />
      <Sparkles
        count={25}
        scale={[8, 5, 8]}
        size={2}
        speed={0.2}
        color="#2ED8A0"
        opacity={0.55}
      />

      {/* Centered nudge (slight height lift) to prevent edge clipping on the right */}
      <group position={[0, 0.45, 0]}>
        <Globe />
        <SecondaryRing />
        <OrbitSystem />
      </group>
    </>
  );
}

/* ----------------------------------------------------------------------- *
 * Canvas wrapper
 * ----------------------------------------------------------------------- */
export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 1.1, 10.0], fov: 46 }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <SceneContents />
    </Canvas>
  );
}
