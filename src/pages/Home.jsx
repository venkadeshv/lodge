import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import RoomCard from '../components/RoomCard';
import { rooms } from '../data/mockData';
import './Home.css';

const Home = () => {
    const featuredRooms = rooms.filter(room => room.featured);

    return (
        <div className="home">
            <Hero />

            {/* Featured Rooms Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured Accommodations</h2>
                        <p className="section-subtitle">
                            Handpicked stays for unforgettable experiences
                        </p>
                    </div>

                    <div className="featured-grid">
                        {featuredRooms.map(room => (
                            <RoomCard key={room.id} room={room} />
                        ))}
                    </div>

                    <div className="section-cta">
                        <Link to="/rooms" className="btn btn-primary btn-large">
                            Explore All Rooms
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section bg-secondary">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Choose Lodges</h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Unique Properties</h3>
                            <p className="feature-description">
                                Discover one-of-a-kind accommodations you won't find anywhere else
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Verified Reviews</h3>
                            <p className="feature-description">
                                Read authentic reviews from real guests to make informed decisions
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Best Price Guarantee</h3>
                            <p className="feature-description">
                                Get the best rates with our price match guarantee and exclusive deals
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="feature-title">24/7 Support</h3>
                            <p className="feature-description">
                                Our dedicated support team is always here to help you
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
