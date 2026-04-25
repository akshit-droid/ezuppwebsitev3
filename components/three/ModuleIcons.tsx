"use client";

/**
 * 3D module icons that revolve around the central globe.
 *
 * Each icon is built from primitive geometries (boxes, cylinders,
 * cones, torus, extrusions) so they read as real 3D objects with
 * lighting + reflections — not flat emojis on spheres.
 *
 * Every icon spins on its own axis via useFrame, while its parent
 * group is responsible for revolving around the globe.
 */

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const BLUE = "#2B4EFF";
const BLUE_LIGHT = "#5C7BFF";
const TEAL = "#2ED8A0";
const TEAL_DARK = "#22B085";
const NAVY = "#0E1638";
const WHITE = "#ffffff";

/* Tiny shared spinning-group helper */
function Spin({
  children,
  speed = 0.6,
  axis = "y",
}: {
  children: React.ReactNode;
  speed?: number;
  axis?: "x" | "y" | "z";
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed;
    if (axis === "y") ref.current.rotation.y = t;
    else if (axis === "x") ref.current.rotation.x = t;
    else ref.current.rotation.z = t;
  });
  return <group ref={ref}>{children}</group>;
}

/* ---------------- FLEET (truck) ---------------- */
export function FleetIcon() {
  return (
    <Spin speed={0.5}>
      <group scale={0.18}>
        {/* cargo body */}
        <mesh position={[0, 0.05, 0]} castShadow>
          <boxGeometry args={[2.2, 1.3, 1.3]} />
          <meshStandardMaterial
            color={BLUE}
            emissive={BLUE}
            emissiveIntensity={0.15}
            roughness={0.35}
            metalness={0.45}
          />
        </mesh>
        {/* cab */}
        <mesh position={[1.45, -0.05, 0]} castShadow>
          <boxGeometry args={[0.8, 1.1, 1.25]} />
          <meshStandardMaterial
            color={WHITE}
            roughness={0.25}
            metalness={0.6}
          />
        </mesh>
        {/* windshield */}
        <mesh position={[1.6, 0.25, 0]} rotation={[0, 0, -0.2]}>
          <boxGeometry args={[0.55, 0.5, 1.05]} />
          <meshStandardMaterial
            color={TEAL}
            emissive={TEAL}
            emissiveIntensity={0.6}
            transparent
            opacity={0.9}
          />
        </mesh>
        {/* wheels */}
        {[
          [-0.7, -0.7, 0.7],
          [-0.7, -0.7, -0.7],
          [1.4, -0.7, 0.7],
          [1.4, -0.7, -0.7],
        ].map((p, i) => (
          <mesh
            key={i}
            position={p as [number, number, number]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <cylinderGeometry args={[0.32, 0.32, 0.22, 24]} />
            <meshStandardMaterial color={NAVY} roughness={0.6} />
          </mesh>
        ))}
        {/* rim accent */}
        {[
          [-0.7, -0.7, 0.81],
          [-0.7, -0.7, -0.81],
          [1.4, -0.7, 0.81],
          [1.4, -0.7, -0.81],
        ].map((p, i) => (
          <mesh
            key={`r${i}`}
            position={p as [number, number, number]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <cylinderGeometry args={[0.14, 0.14, 0.04, 16]} />
            <meshStandardMaterial color={TEAL} emissive={TEAL} emissiveIntensity={0.7} />
          </mesh>
        ))}
      </group>
    </Spin>
  );
}

/* ---------------- CRM (3D bar chart) ---------------- */
export function CrmIcon() {
  return (
    <Spin speed={0.7}>
      <group scale={0.2}>
        {/* base plate */}
        <mesh position={[0, -0.6, 0]} castShadow>
          <boxGeometry args={[2.4, 0.12, 1.6]} />
          <meshStandardMaterial color={WHITE} roughness={0.4} />
        </mesh>
        {/* bars */}
        {[
          { x: -0.7, h: 0.7, color: TEAL },
          { x: 0, h: 1.2, color: BLUE },
          { x: 0.7, h: 0.95, color: TEAL_DARK },
        ].map((b, i) => (
          <mesh key={i} position={[b.x, -0.55 + b.h / 2, 0]} castShadow>
            <boxGeometry args={[0.55, b.h, 0.55]} />
            <meshStandardMaterial
              color={b.color}
              emissive={b.color}
              emissiveIntensity={0.35}
              roughness={0.3}
              metalness={0.5}
            />
          </mesh>
        ))}
        {/* arrow up */}
        <mesh position={[0.95, 0.5, 0]} rotation={[0, 0, -0.5]}>
          <coneGeometry args={[0.18, 0.4, 16]} />
          <meshStandardMaterial color={TEAL} emissive={TEAL} emissiveIntensity={1} />
        </mesh>
      </group>
    </Spin>
  );
}

/* ---------------- WHATSAPP (3D chat bubble) ---------------- */
export function WhatsAppIcon() {
  return (
    <Spin speed={0.55}>
      <group scale={0.22}>
        {/* main bubble — rounded box */}
        <mesh castShadow>
          <boxGeometry args={[1.6, 1.2, 0.5]} />
          <meshStandardMaterial
            color={TEAL}
            emissive={TEAL}
            emissiveIntensity={0.35}
            roughness={0.3}
            metalness={0.45}
          />
        </mesh>
        {/* tail */}
        <mesh position={[-0.65, -0.7, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.4, 0.4, 0.5]} />
          <meshStandardMaterial
            color={TEAL}
            emissive={TEAL}
            emissiveIntensity={0.35}
            roughness={0.3}
            metalness={0.45}
          />
        </mesh>
        {/* dots inside bubble */}
        {[-0.4, 0, 0.4].map((x, i) => (
          <mesh key={i} position={[x, 0, 0.28]}>
            <sphereGeometry args={[0.11, 16, 16]} />
            <meshStandardMaterial
              color={WHITE}
              emissive={WHITE}
              emissiveIntensity={0.6}
            />
          </mesh>
        ))}
      </group>
    </Spin>
  );
}

/* ---------------- WARRANTY (shield) ---------------- */
export function WarrantyIcon() {
  // Build a shield via extruded shape
  const shape = new THREE.Shape();
  shape.moveTo(0, 1);
  shape.bezierCurveTo(1, 1, 1, 0.4, 1, 0);
  shape.bezierCurveTo(1, -0.6, 0.5, -0.95, 0, -1.1);
  shape.bezierCurveTo(-0.5, -0.95, -1, -0.6, -1, 0);
  shape.bezierCurveTo(-1, 0.4, -1, 1, 0, 1);

  return (
    <Spin speed={0.5}>
      <group scale={0.22}>
        <mesh castShadow>
          <extrudeGeometry
            args={[
              shape,
              {
                depth: 0.35,
                bevelEnabled: true,
                bevelThickness: 0.06,
                bevelSize: 0.06,
                bevelSegments: 4,
                curveSegments: 24,
              },
            ]}
          />
          <meshStandardMaterial
            color={BLUE}
            emissive={BLUE}
            emissiveIntensity={0.25}
            roughness={0.3}
            metalness={0.55}
          />
        </mesh>
        {/* check mark */}
        <mesh position={[-0.18, 0.05, 0.4]} rotation={[0, 0, -0.5]}>
          <boxGeometry args={[0.12, 0.45, 0.1]} />
          <meshStandardMaterial color={TEAL} emissive={TEAL} emissiveIntensity={1} />
        </mesh>
        <mesh position={[0.18, 0.18, 0.4]} rotation={[0, 0, 0.7]}>
          <boxGeometry args={[0.12, 0.7, 0.1]} />
          <meshStandardMaterial color={TEAL} emissive={TEAL} emissiveIntensity={1} />
        </mesh>
      </group>
    </Spin>
  );
}

/* ---------------- SUPPLY (crate / box) ---------------- */
export function SupplyIcon() {
  return (
    <Spin speed={0.6}>
      <group scale={0.22}>
        {/* main box */}
        <mesh castShadow>
          <boxGeometry args={[1.4, 1.4, 1.4]} />
          <meshStandardMaterial
            color={BLUE_LIGHT}
            emissive={BLUE}
            emissiveIntensity={0.18}
            roughness={0.4}
            metalness={0.4}
          />
        </mesh>
        {/* strapping bands */}
        <mesh>
          <boxGeometry args={[1.45, 0.12, 1.45]} />
          <meshStandardMaterial color={TEAL} emissive={TEAL} emissiveIntensity={0.55} />
        </mesh>
        <mesh>
          <boxGeometry args={[0.12, 1.45, 1.45]} />
          <meshStandardMaterial color={TEAL} emissive={TEAL} emissiveIntensity={0.55} />
        </mesh>
        {/* corner caps */}
        {[
          [0.7, 0.7, 0.7],
          [-0.7, 0.7, 0.7],
          [0.7, -0.7, 0.7],
          [-0.7, -0.7, 0.7],
        ].map((p, i) => (
          <mesh key={i} position={p as [number, number, number]}>
            <boxGeometry args={[0.18, 0.18, 0.05]} />
            <meshStandardMaterial color={WHITE} roughness={0.5} />
          </mesh>
        ))}
      </group>
    </Spin>
  );
}

/* ---------------- AI (chip / processor) ---------------- */
export function AiIcon() {
  return (
    <Spin speed={0.65}>
      <group scale={0.2}>
        {/* base chip body */}
        <mesh castShadow>
          <boxGeometry args={[1.4, 0.35, 1.4]} />
          <meshStandardMaterial
            color={TEAL}
            emissive={TEAL}
            emissiveIntensity={0.3}
            roughness={0.3}
            metalness={0.6}
          />
        </mesh>
        {/* center die */}
        <mesh position={[0, 0.22, 0]}>
          <boxGeometry args={[0.7, 0.12, 0.7]} />
          <meshStandardMaterial
            color={NAVY}
            emissive={BLUE}
            emissiveIntensity={0.55}
            roughness={0.35}
            metalness={0.7}
          />
        </mesh>
        {/* "AI" indicator dot pulses */}
        <mesh position={[0, 0.32, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color={WHITE} emissive={WHITE} emissiveIntensity={1.2} />
        </mesh>
        {/* pins around all 4 sides */}
        {Array.from({ length: 4 }).map((_, side) =>
          Array.from({ length: 5 }).map((_, i) => {
            const t = (i - 2) * 0.28;
            const positions: [number, number, number][] = [
              [t, -0.05, 0.78],
              [t, -0.05, -0.78],
              [0.78, -0.05, t],
              [-0.78, -0.05, t],
            ];
            const rotations: [number, number, number][] = [
              [0, 0, 0],
              [0, 0, 0],
              [0, Math.PI / 2, 0],
              [0, Math.PI / 2, 0],
            ];
            return (
              <mesh
                key={`p-${side}-${i}`}
                position={positions[side]}
                rotation={rotations[side]}
              >
                <boxGeometry args={[0.12, 0.08, 0.18]} />
                <meshStandardMaterial color={WHITE} roughness={0.4} metalness={0.7} />
              </mesh>
            );
          }),
        )}
      </group>
    </Spin>
  );
}

/* ---------------- icon registry by label ---------------- */
export const MODULE_ICONS: Record<string, React.FC> = {
  Fleet: FleetIcon,
  CRM: CrmIcon,
  WhatsApp: WhatsAppIcon,
  Warranty: WarrantyIcon,
  Supply: SupplyIcon,
  AI: AiIcon,
};
