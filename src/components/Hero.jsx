import SearchBar from './SearchBar';
import './Hero.css';

const Hero = () => {
    const handleSearch = (searchData) => {
        console.log('Search data:', searchData);
        // This will be handled by routing in the actual implementation
    };

    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="container">
                    <div className="hero-text">
                        <h1 className="hero-title">Find Your Perfect Stay</h1>
                        <p className="hero-subtitle">
                            Discover unique accommodations and unforgettable experiences around the world
                        </p>
                    </div>
                    <div className="hero-search">
                        <SearchBar onSearch={handleSearch} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
