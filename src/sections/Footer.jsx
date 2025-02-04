import React from 'react';

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-10 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://github.com/Anushka204" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
                    </a>
                </div>
                <p className="text-white-500">@ 2024 Anushka. All rights reserved.</p>
            </div>
        </section>
    );
};

export default Footer;

