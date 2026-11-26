"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect WebGL support
    try {
      const testCanvas = document.createElement("canvas");
      const gl =
        testCanvas.getContext("webgl") ||
        testCanvas.getContext("experimental-webgl");
      if (!gl) return;
    } catch {
      return;
    }

    let animationFrameId: number;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Texture Loader for Authentic Earth Maps
    const textureLoader = new THREE.TextureLoader();
    const earthDayMap = textureLoader.load("/textures/earth/earth_atmos_2048.jpg");
    const earthNormalMap = textureLoader.load("/textures/earth/earth_normal_2048.jpg");
    const earthSpecMap = textureLoader.load("/textures/earth/earth_specular_2048.jpg");
    const earthCloudMap = textureLoader.load("/textures/earth/earth_clouds_1024.png");

    // Earth Root & Tilted Axial Group (23.4° real axial tilt)
    const earthMasterGroup = new THREE.Group();
    scene.add(earthMasterGroup);

    const earthAxialGroup = new THREE.Group();
    earthAxialGroup.rotation.z = THREE.MathUtils.degToRad(23.4);
    earthAxialGroup.rotation.x = THREE.MathUtils.degToRad(8);
    earthMasterGroup.add(earthAxialGroup);

    // 1. Photorealistic Earth Sphere
    const earthRadius = 1.62;
    const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthDayMap,
      normalMap: earthNormalMap,
      normalScale: new THREE.Vector2(0.85, 0.85),
      roughnessMap: earthSpecMap,
      roughness: 0.65,
      metalness: 0.1,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthAxialGroup.add(earthMesh);

    // 2. Realistic Dynamic Cloud Layer
    const cloudGeometry = new THREE.SphereGeometry(earthRadius + 0.025, 64, 64);
    const cloudMaterial = new THREE.MeshStandardMaterial({
      map: earthCloudMap,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    earthAxialGroup.add(cloudMesh);

    // 3. Atmospheric Ozone Rim Glow (Custom Fresnel Shader)
    const atmosphereGeometry = new THREE.SphereGeometry(earthRadius + 0.12, 48, 48);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
          vec3 atmosphereColor = vec3(0.16, 0.84, 1.0);
          gl_FragColor = vec4(atmosphereColor, 1.0) * intensity * 0.95;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    earthMasterGroup.add(atmosphereMesh);

    // 4. DevSyntix Global Digital Network Rings
    const networkRingGeo1 = new THREE.TorusGeometry(2.15, 0.015, 16, 120);
    const networkRingMat1 = new THREE.MeshBasicMaterial({
      color: 0x29d8ff,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(networkRingGeo1, networkRingMat1);
    ring1.rotation.x = Math.PI / 2.7;
    ring1.rotation.y = Math.PI / 8;
    earthMasterGroup.add(ring1);

    const networkRingGeo2 = new THREE.TorusGeometry(2.35, 0.012, 16, 120);
    const networkRingMat2 = new THREE.MeshBasicMaterial({
      color: 0xaf52de,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(networkRingGeo2, networkRingMat2);
    ring2.rotation.x = -Math.PI / 3.2;
    ring2.rotation.y = -Math.PI / 6;
    earthMasterGroup.add(ring2);

    // 5. Global Telemetry Satellites / Digital Beacons
    const satelliteCount = 10;
    const satelliteGeo = new THREE.SphereGeometry(0.04, 16, 16);
    const satelliteMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x29d8ff,
      emissiveIntensity: 2.0,
    });
    const satelliteGroup = new THREE.Group();
    for (let i = 0; i < satelliteCount; i++) {
      const mesh = new THREE.Mesh(satelliteGeo, satelliteMat);
      const angle = (i / satelliteCount) * Math.PI * 2;
      const radius = 2.15 + (i % 2) * 0.2;
      mesh.position.set(
        Math.cos(angle) * radius,
        (Math.sin(angle * 2) * radius) / 3.5,
        Math.sin(angle) * radius
      );
      satelliteGroup.add(mesh);
    }
    earthMasterGroup.add(satelliteGroup);

    // 6. Deep Space Background Starfield
    const starCount = 220;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 16;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;

      const isCyan = Math.random() > 0.4;
      starColors[i * 3] = isCyan ? 0.16 : 0.68;
      starColors[i * 3 + 1] = isCyan ? 0.85 : 0.32;
      starColors[i * 3 + 2] = 1.0;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );
    starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const starSystem = new THREE.Points(starGeometry, starMaterial);
    scene.add(starSystem);

    // 7. Realistic Solar & Deep Space Lighting
    // Sun key light illuminating one hemisphere realistically
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.8);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    // Night side deep space rim fill light
    const spaceRimLight = new THREE.DirectionalLight(0x0047ff, 0.85);
    spaceRimLight.position.set(-5, -2, -3);
    scene.add(spaceRimLight);

    // Ambient space lighting
    const ambientLight = new THREE.AmbientLight(0x091428, 0.9);
    scene.add(ambientLight);

    // Cyan atmosphere accent light
    const cyanRimLight = new THREE.PointLight(0x29d8ff, 6, 12);
    cyanRimLight.position.set(3.5, -2, 3);
    scene.add(cyanRimLight);

    // Smooth Mouse Interaction Lerp
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.9;
      targetY = y * 0.9;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth interactive mouse follow
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      earthMasterGroup.rotation.y = currentX * 0.6;
      earthMasterGroup.rotation.x = currentY * 0.4;

      // Continuous Earth planetary rotation on its axial tilt
      earthMesh.rotation.y = elapsedTime * 0.08;

      // Cloud layer independent atmospheric drift
      cloudMesh.rotation.y = elapsedTime * 0.105;

      // Digital Network Rings rotation
      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.z = -elapsedTime * 0.12;

      // Satellites orbital motion
      satelliteGroup.rotation.y = elapsedTime * -0.25;

      // Subtle starfield twinkling
      starSystem.rotation.y = elapsedTime * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js objects
      earthGeometry.dispose();
      earthMaterial.dispose();
      cloudGeometry.dispose();
      cloudMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      networkRingGeo1.dispose();
      networkRingMat1.dispose();
      networkRingGeo2.dispose();
      networkRingMat2.dispose();
      satelliteGeo.dispose();
      satelliteMat.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      earthDayMap.dispose();
      earthNormalMap.dispose();
      earthSpecMap.dispose();
      earthCloudMap.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-90"
      aria-hidden="true"
    />
  );
}
