import { Link, useSearchParams } from 'react-router-dom';
import './Success.css';

const Success = () => {
    const [searchParams] = useSearchParams();
    const bookingId = searchParams.get('bookingId');
    const roomName = searchParams.get('roomName');

    return (
        <div className="success-page">
            <div className="container-narrow">
                <div className="success-content">
                    {/* Success Icon */}
                    <div className="success-icon-container">
                        <div className="success-icon">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Success Message */}
                    <div className="success-message">
                        <h1>Booking Confirmed!</h1>
                        <p className="success-subtitle">
                            Your reservation has been successfully confirmed
                        </p>
                    </div>

                    {/* Booking Details */}
                    <div className="booking-details-card">
                        <div className="detail-row">
                            <span className="detail-label">Confirmation Number</span>
                            <span className="detail-value">{bookingId || 'N/A'}</span>
                        </div>
                        {roomName && (
                            <div className="detail-row">
                                <span className="detail-label">Property</span>
                                <span className="detail-value">{decodeURIComponent(roomName)}</span>
                            </div>
                        )}
                    </div>

                    {/* Next Steps */}
                    <div className="next-steps">
                        <h2>What's Next?</h2>
                        <div className="steps-grid">
                            <div className="step-card">
                                <div className="step-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3>Check Your Email</h3>
                                <p>We've sent a confirmation email with all the details of your booking</p>
                            </div>

                            <div className="step-card">
                                <div className="step-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3>Download Receipt</h3>
                                <p>Access your booking receipt and important documents anytime</p>
                            </div>

                            <div className="step-card">
                                <div className="step-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3>Prepare for Your Stay</h3>
                                <p>Review check-in instructions and property amenities before arrival</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="success-actions">
                        <Link to="/" className="btn btn-primary btn-large">
                            Return to Home
                        </Link>
                        <Link to="/rooms" className="btn btn-outline btn-large">
                            Browse More Rooms
                        </Link>
                    </div>

                    {/* Support Info */}
                    <div className="support-info">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>
                            Need help? Contact our support team at{' '}
                            <a href="mailto:support@lodges.com">support@lodges.com</a> or call{' '}
                            <a href="tel:+15551234567">+1 (555) 123-4567</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;
