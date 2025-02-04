import React from 'react'
import { useProgress, Html } from "@react-three/drei";

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html
            as="div"
            center
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <span className="canvas-loader"/>
            <p style={{ fontSize: 14, color: '#F1F1F1', fontWeight: 800, marginTop: 40 }}>
                {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
            </p>
        </Html>
    );
}

export default CanvasLoader;


