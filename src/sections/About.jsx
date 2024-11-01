import React, { useState } from 'react';
import Globe from "react-globe.gl";
import Button from "../component/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("anushka.sh2004@gmail.com");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                {/* First Grid Item */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full h-[276px] object-cover"/>
                        <div>
                            <p className="grid-headtext">Hi, I'm Anushka</p>
                            <p className="grid-subtext"> A digital alchemist turning code into captivating 3D experiences. With a blend of frontend flair and backend brilliance, I conjure animated websites that not only dazzle but also deliver.

                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Grid Item */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full h-[500px] object-cover"/>
                        <div>
                            <p className="grid-headtext"> My Arsenal of Code</p>
                            <p className="grid-subtext">  I turn ideas into interactive experiences using JavaScript and TypeScript. Whether it’s a snappy front end or a robust back end, I’m all about making technology work for you. Let’s build something amazing together!</p>
                        </div>
                    </div>
                </div>

                {/* Globe Section */}
                <div className="grid-container flex flex-col items-center">
                    <div className="rounded-3xl w-full h-[326px] flex justify-center items-center">
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0,0,0,0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

                        />
                    </div>
                    <div className="text-center">
                        <p className="grid-headtext"> Coding Beyond Borders</p>
                        <p className="grid-subtext">Like a digital nomad, I explore the vast landscape of code. Each project is a new territory, filled with unique challenges and exciting discoveries, where creativity knows no bounds.</p>
                        <Button name="Contact me" isBeam containerClass="w-full mt-10"/>
                    </div>
                </div>

                {/* Third Grid Item */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full h-[266px] object-cover"/>
                        <div>
                            <p className="grid-headtext">The Art of Coding</p>
                            <p className="grid-subtext">Like a digital nomad, I explore the vast landscape of code. Each project is a new territory, filled with unique challenges and exciting discoveries, where creativity knows no bounds.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="xl:col-span-1 2xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full h-auto object-cover"/>
                        <div className="space-y-2 pt-4 pb-6">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container flex items-center justify-center" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy status" className="mr-2"/>
                                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">anushka.sh2004@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;


