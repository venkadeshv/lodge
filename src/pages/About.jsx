import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="about-hero-content">
                    <div className="container">
                        <h1>About Lodges</h1>
                        <p>Connecting travelers with unique accommodations worldwide</p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section">
                <div className="container-narrow">
                    <div className="about-mission">
                        <h2>Our Mission</h2>
                        <p>
                            At Lodges, we believe that travel is more than just visiting new places—it's about
                            creating meaningful experiences and lasting memories. Our mission is to connect travelers
                            with unique, handpicked accommodations that offer comfort, authenticity, and local charm.
                        </p>
                        <p>
                            Whether you're seeking a cozy mountain cabin, a beachfront villa, or a modern urban loft,
                            we're here to help you find the perfect place to stay. Every property in our collection
                            is carefully selected to ensure quality, safety, and an exceptional guest experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section bg-secondary">
                <div className="container">
                    <h2 className="section-title">Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3>Authenticity</h3>
                            <p>We curate genuine, unique properties that reflect local culture and character</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3>Trust & Safety</h3>
                            <p>Your safety is our priority with verified properties and secure booking</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3>Guest Satisfaction</h3>
                            <p>We're committed to ensuring every stay exceeds your expectations</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3>Sustainability</h3>
                            <p>We partner with eco-conscious hosts to promote responsible travel</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-number">10K+</div>
                            <div className="stat-label">Properties</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">50K+</div>
                            <div className="stat-label">Happy Guests</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">100+</div>
                            <div className="stat-label">Countries</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">4.9</div>
                            <div className="stat-label">Average Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section bg-secondary">
                <div className="container-narrow">
                    <div className="contact-section">
                        <h2>Get In Touch</h2>
                        <p className="contact-intro">
                            Have questions or need assistance? We're here to help!
                        </p>

                        <div className="contact-grid">
                            <div className="contact-card">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <h3>Email Us</h3>
                                <a href="mailto:support@lodges.com">support@lodges.com</a>
                            </div>

                            <div className="contact-card">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <h3>Call Us</h3>
                                <a href="tel:+15551234567">+1 (555) 123-4567</a>
                            </div>

                            <div className="contact-card">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                <h3>Visit Us</h3>
                                <p>123 Main St, Suite 100<br />San Francisco, CA 94102</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
