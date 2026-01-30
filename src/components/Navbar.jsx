import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 2L4 12h3v14h18V12h3L16 2z" fill="var(--primary-color)" />
                            <path d="M12 18h8v8h-8v-8z" fill="var(--bg-primary)" />
                        </svg>
                        <span className="navbar-logo-text">Lodges</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="navbar-links">
                        <Link
                            to="/"
                            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/rooms"
                            className={`navbar-link ${isActive('/rooms') ? 'active' : ''}`}
                        >
                            Rooms
                        </Link>
                        <Link
                            to="/about"
                            className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
                        >
                            About
                        </Link>
                    </div>

                    {/* User Menu (Desktop) */}
                    <div className="navbar-user">
                        <button className="btn btn-outline btn-small">Sign In</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="navbar-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <div className="navbar-mobile-links">
                        <Link
                            to="/"
                            className={`navbar-mobile-link ${isActive('/') ? 'active' : ''}`}
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/rooms"
                            className={`navbar-mobile-link ${isActive('/rooms') ? 'active' : ''}`}
                            onClick={closeMobileMenu}
                        >
                            Rooms
                        </Link>
                        <Link
                            to="/about"
                            className={`navbar-mobile-link ${isActive('/about') ? 'active' : ''}`}
                            onClick={closeMobileMenu}
                        >
                            About
                        </Link>
                        <button className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-md)' }}>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div
                className={`overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={closeMobileMenu}
            />
        </nav>
    );
};

export default Navbar;
