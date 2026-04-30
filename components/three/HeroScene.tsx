"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Billboard, Html, Sparkles } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { MODULE_ICONS } from "./ModuleIcons";

/* ----------------------------------------------------------------------- *
 * Module nodes — these revolve around the globe on a tilted orbit.
 * Each node is a real 3D mesh icon (truck, chart, chip, …) instead of a
 * flat emoji on a sphere.
 * ----------------------------------------------------------------------- */
interface NodeData {
  label: string;
  color: string;
}

const NODES: NodeData[] = [
  { label: "Fleet", color: "#2B4EFF" },
  { label: "CRM", color: "#2ED8A0" },
  { label: "WhatsApp", color: "#2B4EFF" },
  { label: "Warranty", color: "#2ED8A0" },
  { label: "Supply", color: "#2B4EFF" },
  { label: "AI", color: "#2ED8A0" },
];

const ORBIT_RADIUS = 3.15;
const ORBIT_TILT = 0.42; // tilted enough that nodes pass clearly in front + behind

/* ----------------------------------------------------------------------- *
 * Central globe — wireframe sphere with Ezupp U-arrow logo decaled on it
 * ----------------------------------------------------------------------- */
function Globe() {
  const wire = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.Mesh>(null);

  const logoTex = useLoader(THREE.TextureLoader, "/assets/favicon.png");
  logoTex.colorSpace = THREE.SRGBColorSpace;
  logoTex.anisotropy = 8;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (wire.current) wire.current.rotation.y = t * 0.16;
    if (core.current) core.current.rotation.y = t * 0.1;
    if (halo.current) {
      const pulse = 1 + Math.sin(t * 1.1) * 0.04;
      halo.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>
      {/* gradient core */}
      <mesh ref={core}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial
          color="#2B4EFF"
          roughness={0.32}
          metalness={0.45}
          emissive="#2B4EFF"
          emissiveIntensity={0.32}
        />
      </mesh>

      {/* wireframe shell */}
      <mesh ref={wire}>
        <sphereGeometry args={[1.27, 32, 22]} />
        <meshBasicMaterial
          color="#9CB5FF"
          wireframe
          transparent
          opacity={0.32}
        />
      </mesh>

      {/* inner teal accent */}
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

      {/* pulsing halo */}
      <mesh ref={halo}>
        <sphereGeometry args={[1.4, 32, 32]} />
        <meshBasicMaterial color="#2B4EFF" transparent opacity={0.08} />
      </mesh>

      {/* extended atmospheric glow */}
      <mesh>
        <sphereGeometry args={[1.7, 32, 32]} />
        <meshBasicMaterial color="#2B4EFF" transparent opacity={0.035} />
      </mesh>

      {/* EZUPP LOGO — billboarded textured plane parked in front of the globe
          so it always reads as the logo, regardless of camera angle. The plane
          sits just outside the core radius so it reads as printed-on. */}
      <Billboard>
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[1.45, 1.45]} />
          <meshBasicMaterial
            map={logoTex}
            transparent
            depthWrite={false}
            depthTest={false}
            toneMapped={false}
          />
        </mesh>
      </Billboard>
    </group>
  );
}

/* ----------------------------------------------------------------------- *
 * Orbit ring
 * ----------------------------------------------------------------------- */
function OrbitRing() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[ORBIT_RADIUS - 0.008, ORBIT_RADIUS + 0.008, 128]} />
      <meshBasicMaterial
        color="#2B4EFF"
        transparent
        opacity={0.32}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ----------------------------------------------------------------------- *
 * Energy beam — thin glowing line from globe to a node, rotating with it
 * ----------------------------------------------------------------------- */
function EnergyBeam({ angle, color }: { angle: number; color: string }) {
  const curve = useMemo(() => {
    const x = Math.cos(angle) * ORBIT_RADIUS;
    const z = Math.sin(angle) * ORBIT_RADIUS;
    const mid = new THREE.Vector3(x * 0.5, 0.18, z * 0.5);
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      mid,
      new THREE.Vector3(x, 0, z),
    ]);
  }, [angle]);

  return (
    <mesh>
      <tubeGeometry args={[curve, 36, 0.013, 6, false]} />
      <meshBasicMaterial color={color} transparent opacity={0.28} />
    </mesh>
  );
}

/* ----------------------------------------------------------------------- *
 * Module node — REAL 3D mesh icon (truck, chip, shield, …) revolving on a
 * tilted orbit. A soft glow halo behind the icon picks up the module color
 * so the orbit still reads as a coloured ring when the icons are in front
 * of the dark globe. A small billboard label pill sits below the mesh so
 * the user can still read which module is which.
 *
 * The whole node group also bobs gently on its own axis via useFrame so
 * even when the orbit is briefly behind the globe you feel the icons are
 * "alive". A depth-based scale lerp gives convincing 3D depth.
 * ----------------------------------------------------------------------- */
function ModuleNode({
  node,
  angle,
}: {
  node: NodeData;
  angle: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const bobRef = useRef<THREE.Group>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const isTeal = node.color === "#2ED8A0";
  const Icon = MODULE_ICONS[node.label];

  // base position on the orbit
  const x = Math.cos(angle) * ORBIT_RADIUS;
  const z = Math.sin(angle) * ORBIT_RADIUS;

  // each icon gets its own bob phase so they don't all float in lockstep
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(({ camera, clock }) => {
    if (groupRef.current) {
      // distance from camera → tiny scale shift so chips "feel" in front/behind
      const worldPos = new THREE.Vector3();
      groupRef.current.getWorldPosition(worldPos);
      const dist = worldPos.distanceTo(camera.position);
      const target = THREE.MathUtils.clamp(11.5 / dist, 0.85, 1.18);
      groupRef.current.scale.lerp(
        new THREE.Vector3(target, target, target),
        0.1,
      );
      // hide label when node is behind the globe (z < 0 in world space = far side from camera)
      if (labelRef.current) {
        labelRef.current.style.opacity = worldPos.z < 0 ? "0" : "1";
        labelRef.current.style.transition = "opacity 0.18s";
      }
    }
    if (bobRef.current) {
      // gentle vertical bob
      bobRef.current.position.y =
        Math.sin(clock.getElapsedTime() * 1.4 + phase) * 0.06;
    }
  });

  return (
    <group ref={groupRef} position={[x, 0, z]}>
      <group ref={bobRef}>
        {/* soft coloured halo behind the icon — picks up the module accent
            colour so it reads even against the dark globe */}
        <mesh>
          <sphereGeometry args={[0.46, 24, 24]} />
          <meshBasicMaterial color={node.color} transparent opacity={0.18} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.62, 16, 16]} />
          <meshBasicMaterial color={node.color} transparent opacity={0.06} />
        </mesh>

        {/* THE actual 3D mesh icon — defined in ModuleIcons.tsx */}
        {Icon ? <Icon /> : null}
      </group>

      {/* Label pill — sits just below the mesh, billboarded */}
      <Billboard position={[0, -0.55, 0]}>
        <Html
          center
          distanceFactor={9}
          style={{ pointerEvents: "none", userSelect: "none" }}
        >
          <div
            ref={labelRef}
            style={{
              padding: "4px 10px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.97)",
              boxShadow: isTeal
                ? "0 8px 18px rgba(46,216,160,0.28), 0 1px 4px rgba(8,15,46,0.08)"
                : "0 8px 18px rgba(43,78,255,0.28), 0 1px 4px rgba(8,15,46,0.08)",
              fontFamily:
                "var(--font-jakarta, 'Plus Jakarta Sans'), sans-serif",
              fontSize: 11,
              fontWeight: 800,
              color: "#080F2E",
              whiteSpace: "nowrap",
              letterSpacing: "-0.01em",
              border: `1.5px solid ${isTeal ? "rgba(46,216,160,0.4)" : "rgba(43,78,255,0.32)"}`,
            }}
          >
            {node.label}
          </div>
        </Html>
      </Billboard>
    </group>
  );
}

/* ----------------------------------------------------------------------- *
 * Orbit system — chips REVOLVE around the globe inside a tilted group.
 * Tilt is steep enough that they cross IN FRONT and BEHIND the globe,
 * giving real 3D depth.
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
    if (ref.current) {
      // gentle but noticeable revolution
      ref.current.rotation.y = clock.getElapsedTime() * 0.12;
    }
  });

  return (
    <group rotation={[ORBIT_TILT, 0, 0]}>
      <group ref={ref}>
        <OrbitRing />
        {nodes.map(({ node, angle }) => (
          <EnergyBeam key={`b-${node.label}`} angle={angle} color={node.color} />
        ))}
        {nodes.map(({ node, angle }) => (
          <ModuleNode key={node.label} node={node} angle={angle} />
        ))}
      </group>
    </group>
  );
}

/* ----------------------------------------------------------------------- *
 * Secondary perpendicular orbit — purely decorative, gives "real planet"
 * vibe with crossing rings.
 * ----------------------------------------------------------------------- */
function SecondaryOrbit() {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.x = clock.getElapsedTime() * 0.08;
  });

  return (
    <group rotation={[Math.PI / 2.2, Math.PI / 5, 0]} ref={ref}>
      {/* ring */}
      <mesh>
        <ringGeometry args={[3.6, 3.62, 128]} />
        <meshBasicMaterial
          color="#2ED8A0"
          transparent
          opacity={0.22}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* two decorative satellites on this orbit */}
      <group position={[3.6, 0, 0]}>
        <mesh>
          <sphereGeometry args={[0.13, 24, 24]} />
          <meshStandardMaterial
            color="#2ED8A0"
            emissive="#2ED8A0"
            emissiveIntensity={1.2}
            roughness={0.3}
            metalness={0.5}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshBasicMaterial color="#2ED8A0" transparent opacity={0.18} />
        </mesh>
      </group>
      <group position={[-3.6, 0, 0]}>
        <mesh>
          <sphereGeometry args={[0.1, 24, 24]} />
          <meshStandardMaterial
            color="#9CB5FF"
            emissive="#9CB5FF"
            emissiveIntensity={1}
            roughness={0.3}
            metalness={0.5}
          />
        </mesh>
      </group>
    </group>
  );
}

/* ----------------------------------------------------------------------- *
 * Distant ring — outer dashed-feel ring, slow counter-rotation
 * ----------------------------------------------------------------------- */
function DistantRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = -clock.getElapsedTime() * 0.04;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 1.85, Math.PI / 4.5, 0]}>
      <ringGeometry args={[4.4, 4.415, 200]} />
      <meshBasicMaterial
        color="#2B4EFF"
        transparent
        opacity={0.14}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ----------------------------------------------------------------------- *
 * Floating metric card — small HTML chip in 3D space, top-left
 * ----------------------------------------------------------------------- */
function FloatingMetric() {
  return (
    <group position={[-2.6, 1.7, 0.4]}>
      <Billboard>
        <Html center distanceFactor={9}>
          <div
            style={{
              background: "rgba(255,255,255,0.98)",
              borderRadius: 14,
              padding: "10px 14px",
              boxShadow:
                "0 16px 40px rgba(8,15,46,0.12), 0 2px 8px rgba(8,15,46,0.06)",
              border: "1.5px solid rgba(46,216,160,0.32)",
              fontFamily:
                "var(--font-jakarta, 'Plus Jakarta Sans'), sans-serif",
              pointerEvents: "none",
              userSelect: "none",
              minWidth: 120,
            }}
          >
            <div
              style={{
                fontSize: 9,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#22B085",
              }}
            >
              ● Live · uptime
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "#080F2E",
                lineHeight: 1.1,
                marginTop: 2,
                letterSpacing: "-0.02em",
              }}
            >
              99.98%
            </div>
          </div>
        </Html>
      </Billboard>
    </group>
  );
}

/* ----------------------------------------------------------------------- *
 * Scene contents
 * ----------------------------------------------------------------------- */
function SceneContents({ compact }: { compact: boolean }) {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 6, 5]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-6, -3, -4]} intensity={0.55} color="#2ED8A0" />
      <pointLight position={[6, 4, -3]} intensity={0.45} color="#2B4EFF" />

      {/* layered sparkle field */}
      <Sparkles
        count={120}
        scale={[20, 12, 14]}
        size={1.1}
        speed={0.18}
        color="#2B4EFF"
        opacity={0.32}
      />
      <Sparkles
        count={55}
        scale={[14, 9, 11]}
        size={1.8}
        speed={0.22}
        color="#2ED8A0"
        opacity={0.5}
      />
      <Sparkles
        count={22}
        scale={[8, 5, 8]}
        size={2.4}
        speed={0.3}
        color="#ffffff"
        opacity={0.7}
      />

      <group position={[-0.1, 0.3, 0]}>
        <Globe />
        <DistantRing />
        <SecondaryOrbit />
        <OrbitSystem />
        {/* In-canvas "Live uptime" card — hidden in compact mode (mobile)
            because it overlaps the orbit on narrow viewports. */}
        {!compact && <FloatingMetric />}
      </group>
    </>
  );
}

/* ----------------------------------------------------------------------- *
 * Canvas wrapper
 * ----------------------------------------------------------------------- */
export default function HeroScene({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 1.0, 12.5], fov: 46 }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <SceneContents compact={compact} />
    </Canvas>
  );
}
