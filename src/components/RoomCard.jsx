import { useState } from 'react';
import { Link } from 'react-router-dom';
import './RoomCard.css';

const RoomCard = ({ room }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e) => {
        e.preventDefault();
        setCurrentImageIndex((prev) =>
            prev === room.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = (e) => {
        e.preventDefault();
        setCurrentImageIndex((prev) =>
            prev === 0 ? room.images.length - 1 : prev - 1
        );
    };

    const goToImage = (index, e) => {
        e.preventDefault();
        setCurrentImageIndex(index);
    };

    return (
        <Link to={`/rooms/${room.id}`} className="room-card">
            <div className="room-card-image-container">
                <img
                    src={room.images[currentImageIndex]}
                    alt={room.name}
                    className="room-card-image"
                />

                {room.images.length > 1 && (
                    <>
                        <button
                            className="room-card-nav room-card-nav-prev"
                            onClick={prevImage}
                            aria-label="Previous image"
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className="room-card-nav room-card-nav-next"
                            onClick={nextImage}
                            aria-label="Next image"
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="room-card-dots">
                            {room.images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`room-card-dot ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={(e) => goToImage(index, e)}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="room-card-body">
                <div className="room-card-header">
                    <div>
                        <h3 className="room-card-title">{room.name}</h3>
                        <p className="room-card-location">{room.location}</p>
                    </div>
                    <div className="room-card-rating">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span>{room.rating}</span>
                    </div>
                </div>

                <div className="room-card-amenities">
                    {room.amenities.slice(0, 3).map((amenity, index) => (
                        <span key={index} className="room-card-amenity">
                            {amenity}
                        </span>
                    ))}
                    {room.amenities.length > 3 && (
                        <span className="room-card-amenity">+{room.amenities.length - 3} more</span>
                    )}
                </div>

                <div className="room-card-footer">
                    <div className="room-card-price">
                        <span className="room-card-price-amount">${room.price}</span>
                        <span className="room-card-price-period">/ night</span>
                    </div>
                    <button className="btn btn-primary btn-small">View Details</button>
                </div>
            </div>
        </Link>
    );
};

export default RoomCard;
