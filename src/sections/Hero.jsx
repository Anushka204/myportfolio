import Cube from "../component/Cube.jsx";
import { Suspense } from 'react';
import HackerRoom from '../component/HackerRoom.jsx';
import Target from '../component/Target.jsx';
import CanvasLoader from '../component/CanvasLoader.jsx';
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from 'react-responsive';
import { Canvas } from '@react-three/fiber';
import { calculateSizes } from '../constants/index.js';
import ReactLogo from "../component/ReactLogo.jsx";
import Rings from "../component/Rings.jsx";
import HeroCamera from "../component/HeroCamera.jsx";
import Button from "../component/Button.jsx";

const Hero = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isSmall = useMediaQuery({ query: '(max-width: 440px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
    const sizes = calculateSizes(isMobile, isSmall, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Anushka<span className="waving-hand">👋🏻</span>
                </p>
                <p className="hero_tag text-gray_gradient text-center mt-4">
                    Building Web Solutions for Brands
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                position={[0, -8, sizes.deskPosition[2]]} // Decrease Y position further
                                rotation={[0, -Math.PI, 0]}
                                scale={sizes.deskScale}
                            />
                        </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition}/>
                        </group>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                    <Button name={"Let's Work Together"}  isBeam  containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>

        </section>
    );
};

export default Hero;
