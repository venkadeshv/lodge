import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, inline = false }) => {
  const [formData, setFormData] = useState({
    roomType: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(formData);
    }
  };

  return (
    <form className={`search-bar ${inline ? 'search-bar-inline' : ''}`} onSubmit={handleSubmit}>
      <div className="search-bar-fields">
        <div className="search-field">
          <label htmlFor="roomType" className="search-label">Room Type</label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="search-input"
          >
            <option value="">All Types</option>
            <option value="Suite">Suite</option>
            <option value="Villa">Villa (Ultra Deluxe)</option>
            <option value="Cabin">Cabin</option>
            <option value="Loft">Loft</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </div>

        <div className="search-field">
          <label htmlFor="checkIn" className="search-label">Check In</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="search-input"
          />
        </div>

        <div className="search-field">
          <label htmlFor="checkOut" className="search-label">Check Out</label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="search-input"
          />
        </div>

        <div className="search-field">
          <label htmlFor="guests" className="search-label">Guests</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="search-input"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-primary search-button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span>Search</span>
      </button>
    </form >
  );
};

export default SearchBar;
