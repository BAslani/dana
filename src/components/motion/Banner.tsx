'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function DataCenterBanner() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return
    const mount = mountRef.current

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(
      30,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(5, 6, 10)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    )
    renderer.setPixelRatio(window.devicePixelRatio)
    mountRef.current.appendChild(renderer.domElement)

    // Lights
    scene.add(new THREE.AmbientLight(0x404040, 1.5))

    const pointLight = new THREE.PointLight(0x00d8ff, 2, 50)
    pointLight.position.set(0, 15, 15)
    scene.add(pointLight)

    const whiteLight = new THREE.PointLight(0xffffff, 0.6, 80)
    whiteLight.position.set(-10, 8, -10)
    scene.add(whiteLight)

    // Server rack base geometry
    const rackGeometry = new THREE.BoxGeometry(1, 3, 1.5)
    const rackMaterial = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.8,
      roughness: 0.3,
    })

    // LED panel geometry
    const ledGeometry = new THREE.BoxGeometry(0.8, 0.05, 0.05)
    const ledMaterialOn = new THREE.MeshStandardMaterial({
      color: 0x00d8ff,
      emissive: 0x00d8ff,
      emissiveIntensity: 0.8,
      metalness: 0.2,
      roughness: 0.2,
    })
    const ledMaterialOff = new THREE.MeshStandardMaterial({
      color: 0x002233,
      emissive: 0x001122,
      emissiveIntensity: 0.1,
      metalness: 0.2,
      roughness: 0.4,
    })

    const racks: THREE.Group[] = []
    const group = new THREE.Group()

    // Create grid of racks with LED panels
    const rows = 3
    const cols = 8
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const rackGroup = new THREE.Group()

        const rack = new THREE.Mesh(rackGeometry, rackMaterial)
        rackGroup.add(rack)

        // Add vertical stack of LEDs
        for (let k = 0; k < 10; k++) {
          const led = new THREE.Mesh(
            ledGeometry,
            Math.random() > 0.3 ? ledMaterialOn.clone() : ledMaterialOff.clone()
          )
          led.position.set(0, -1.3 + k * 0.3, 0.8)
          rackGroup.add(led)
        }

        rackGroup.position.set(j * 2 - (cols - 1), 0, i * 3 - (rows - 1))
        group.add(rackGroup)
        racks.push(rackGroup)
      }
    }

    scene.add(group)

    // Floor plane (for subtle reflection look)
    const floorGeometry = new THREE.PlaneGeometry(100, 100)
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      metalness: 0.9,
      roughness: 0.5,
    })
    const floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -1.6
    scene.add(floor)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Flicker effect for LEDs
      racks.forEach((rack) => {
        rack.children.forEach((child) => {
          if (child instanceof THREE.Mesh && Math.random() > 0.995) {
            const mat = child.material as THREE.MeshStandardMaterial
            mat.emissiveIntensity = mat.emissiveIntensity === 0.8 ? 0.1 : 0.8
          }
        })
      })

      // Subtle camera orbit
      camera.position.x = Math.sin(Date.now() * 0.0003) * 10
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      )
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (mount) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className='w-full h-[300px]' />
}
