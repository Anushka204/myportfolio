import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                'service_mkgwgov',
                'template_of4rxbc',
                {
                    from_name: form.name,
                    to_email: 'anushka.sh2004@gmail.com',
                    message: form.message
                },
                '3-GMDY_0_F-oY3yx9'
            );

            setLoading(false);
            alert('Your message has been sent.');
        } catch (error) {
            setLoading(false);
            console.log('EmailJS error:', error.text);
            alert("Something went wrong");
        }
    };

    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col mt-4">
                <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 min-h-screen" />

                <div className="contact-container max-w-lg w-full p-9">
                    <h3 className="head-text text-center mb-12">Let's Talk</h3>
                    <p className="text-lg text-white-600 mt-3">Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-3">
                        <label className="space-y-3">
                            <span className="field-label">Full Name
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="field-input"
                                    placeholder="John Doe"
                                />
                            </span>
                            <span className="field-label">Email
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="field-input"
                                    placeholder="johndoe@gmail.com"
                                />
                            </span>
                            <span className="field-label">Your message
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="field-input"
                                    placeholder="Hi, I wanna give you a job..."
                                />
                            </span>
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending..' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn-arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
