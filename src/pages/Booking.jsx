import { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { rooms } from '../data/mockData';
import './Booking.css';

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const room = rooms.find(r => r.id === parseInt(id));

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialRequests: ''
    });

    const checkIn = searchParams.get('checkIn') || '';
    const checkOut = searchParams.get('checkOut') || '';
    const guests = parseInt(searchParams.get('guests')) || 1;

    if (!room) {
        navigate('/rooms');
        return null;
    }

    // Calculate number of nights
    const calculateNights = () => {
        if (!checkIn || !checkOut) return 0;
        const start = new Date(checkIn);
        const end = new Date(checkOut);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const nights = calculateNights();
    const subtotal = nights * room.price;
    const serviceFee = subtotal * 0.1;
    const total = subtotal + serviceFee;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
            alert('Please fill in all required fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Simulate booking creation
        const bookingId = 'BK' + Date.now();
        navigate(`/success?bookingId=${bookingId}&roomName=${encodeURIComponent(room.name)}`);
    };

    return (
        <div className="booking-page">
            <div className="container">
                <div className="booking-header">
                    <h1>Complete Your Booking</h1>
                    <p>You're just one step away from your perfect stay</p>
                </div>

                <div className="booking-layout">
                    {/* Booking Form */}
                    <div className="booking-main">
                        <form className="booking-form-container" onSubmit={handleSubmit}>
                            <section className="form-section">
                                <h2>Guest Information</h2>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name *</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name *</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="specialRequests">Special Requests (Optional)</label>
                                    <textarea
                                        id="specialRequests"
                                        name="specialRequests"
                                        value={formData.specialRequests}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Any special requirements or requests?"
                                    />
                                </div>
                            </section>

                            <section className="form-section">
                                <h2>Payment Information</h2>
                                <p className="payment-note">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    This is a demo. No actual payment will be processed.
                                </p>

                                <div className="form-grid">
                                    <div className="form-group full-width">
                                        <label htmlFor="cardNumber">Card Number</label>
                                        <input
                                            type="text"
                                            id="cardNumber"
                                            placeholder="1234 5678 9012 3456"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="expiryDate">Expiry Date</label>
                                        <input
                                            type="text"
                                            id="expiryDate"
                                            placeholder="MM/YY"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="cvv">CVV</label>
                                        <input
                                            type="text"
                                            id="cvv"
                                            placeholder="123"
                                        />
                                    </div>
                                </div>
                            </section>

                            <div className="form-actions">
                                <label className="checkbox-label">
                                    <input type="checkbox" required />
                                    <span>I agree to the terms and conditions</span>
                                </label>

                                <button type="submit" className="btn btn-primary btn-large">
                                    Confirm Booking
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Booking Summary */}
                    <aside className="booking-sidebar">
                        <div className="summary-card">
                            <h3>Booking Summary</h3>

                            <div className="summary-room">
                                <img src={room.images[0]} alt={room.name} />
                                <div>
                                    <h4>{room.name}</h4>
                                    <p>{room.location}</p>
                                </div>
                            </div>

                            <div className="summary-details">
                                <div className="summary-row">
                                    <span>Check-in:</span>
                                    <strong>{checkIn || 'Not selected'}</strong>
                                </div>
                                <div className="summary-row">
                                    <span>Check-out:</span>
                                    <strong>{checkOut || 'Not selected'}</strong>
                                </div>
                                <div className="summary-row">
                                    <span>Guests:</span>
                                    <strong>{guests}</strong>
                                </div>
                                <div className="summary-row">
                                    <span>Nights:</span>
                                    <strong>{nights}</strong>
                                </div>
                            </div>

                            <div className="summary-pricing">
                                <div className="summary-row">
                                    <span>${room.price} × {nights} nights</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Service fee</span>
                                    <span>${serviceFee.toFixed(2)}</span>
                                </div>
                                <div className="summary-row total">
                                    <strong>Total</strong>
                                    <strong>${total.toFixed(2)}</strong>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Booking;
