import React, { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from "@react-three/fiber";

const HeroCamera = ({ children, isMobile }) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        // Define the target position for the camera
        const target = [0, 0, 20];
        const smoothTime = 0.25; // Define the smooth time

        // Smoothly damp the camera position
        easing.damp3(state.camera.position, target, smoothTime, delta);

        if (!isMobile) {
            // Smoothly damp the rotation of the group based on pointer movement
            easing.dampE(groupRef.current.rotation,
                [-state.pointer.y / 3, -state.pointer.x / 5, 0],
                smoothTime,
                delta);
        }
    });

    return (
        <group ref={groupRef} scale={isMobile ? 1:1.2}>
            {children}
        </group>
    );
};

export default HeroCamera;

