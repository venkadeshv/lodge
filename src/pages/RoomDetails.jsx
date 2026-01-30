import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { rooms } from '../data/mockData';
import './RoomDetails.css';

const RoomDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const room = rooms.find(r => r.id === parseInt(id));
    const [currentImage, setCurrentImage] = useState(0);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);

    if (!room) {
        return (
            <div className="not-found">
                <div className="container">
                    <h1>Room Not Found</h1>
                    <Link to="/rooms" className="btn btn-primary">Back to Rooms</Link>
                </div>
            </div>
        );
    }

    const handleBooking = () => {
        if (!checkIn || !checkOut) {
            alert('Please select check-in and check-out dates');
            return;
        }
        navigate(`/booking/${room.id}?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`);
    };

    const similarRooms = rooms
        .filter(r => r.id !== room.id && r.type === room.type)
        .slice(0, 3);

    return (
        <div className="room-details">
            {/* Header */}
            <div className="room-details-header">
                <div className="container">
                    <Link to="/rooms" className="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Rooms</span>
                    </Link>
                    <h1 className="room-details-title">{room.name}</h1>
                    <div className="room-details-meta">
                        <div className="room-meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <span>{room.rating} ({room.reviews} reviews)</span>
                        </div>
                        <div className="room-meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            <span>{room.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Gallery */}
            <div className="room-gallery">
                <div className="container">
                    <div className="gallery-main">
                        <img src={room.images[currentImage]} alt={room.name} className="gallery-main-image" />
                    </div>
                    <div className="gallery-thumbnails">
                        {room.images.map((image, index) => (
                            <button
                                key={index}
                                className={`gallery-thumbnail ${currentImage === index ? 'active' : ''}`}
                                onClick={() => setCurrentImage(index)}
                            >
                                <img src={image} alt={`${room.name} ${index + 1}`} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Details and Booking */}
            <div className="room-content">
                <div className="container">
                    <div className="room-layout">
                        {/* Main Content */}
                        <div className="room-main">
                            <section className="room-section">
                                <h2>About This Property</h2>
                                <p className="room-description">{room.description}</p>
                            </section>

                            <section className="room-section">
                                <h2>Property Details</h2>
                                <div className="property-details">
                                    <div className="detail-item">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <div>
                                            <div className="detail-label">Guests</div>
                                            <div className="detail-value">{room.guests} guests</div>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                        <div>
                                            <div className="detail-label">Bedrooms</div>
                                            <div className="detail-value">{room.bedrooms} bedrooms</div>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <div className="detail-label">Beds</div>
                                            <div className="detail-value">{room.beds} beds</div>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <div className="detail-label">Bathrooms</div>
                                            <div className="detail-value">{room.bathrooms} bathrooms</div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="room-section">
                                <h2>Amenities</h2>
                                <div className="amenities-grid">
                                    {room.amenities.map((amenity, index) => (
                                        <div key={index} className="amenity-item">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Booking Sidebar */}
                        <aside className="room-sidebar">
                            <div className="booking-card">
                                <div className="booking-price">
                                    <span className="price-amount">₹{room.price}</span>
                                    <span className="price-period">/ night</span>
                                </div>

                                <div className="booking-form">
                                    <div className="form-group">
                                        <label htmlFor="checkIn">Check In</label>
                                        <input
                                            type="date"
                                            id="checkIn"
                                            value={checkIn}
                                            onChange={(e) => setCheckIn(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="checkOut">Check Out</label>
                                        <input
                                            type="date"
                                            id="checkOut"
                                            value={checkOut}
                                            onChange={(e) => setCheckOut(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="guests">Guests</label>
                                        <select
                                            id="guests"
                                            value={guests}
                                            onChange={(e) => setGuests(parseInt(e.target.value))}
                                        >
                                            {Array.from({ length: room.guests }, (_, i) => i + 1).map(num => (
                                                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <button className="btn btn-primary btn-large" onClick={handleBooking}>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            {/* Similar Rooms */}
            {similarRooms.length > 0 && (
                <div className="similar-rooms">
                    <div className="container">
                        <h2 className="section-title">Similar Properties</h2>
                        <div className="similar-grid">
                            {similarRooms.map(similarRoom => (
                                <Link key={similarRoom.id} to={`/rooms/${similarRoom.id}`} className="similar-card">
                                    <img src={similarRoom.images[0]} alt={similarRoom.name} />
                                    <div className="similar-info">
                                        <h3>{similarRoom.name}</h3>
                                        <p className="similar-price">₹{similarRoom.price} / night</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoomDetails;
