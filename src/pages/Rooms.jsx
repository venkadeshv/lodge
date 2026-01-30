import { useState } from 'react';
import RoomCard from '../components/RoomCard';
import SearchBar from '../components/SearchBar';
import { rooms } from '../data/mockData';
import './Rooms.css';

const Rooms = () => {
    const [filteredRooms, setFilteredRooms] = useState(rooms);
    const [filters, setFilters] = useState({
        priceRange: [0, 40000],
        type: 'all',
        amenities: []
    });

    const handleSearch = (searchData) => {
        console.log('Search:', searchData);
        // Filter logic can be implemented here
    };

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    const roomTypes = ['all', ...new Set(rooms.map(r => r.type))];
    const allAmenities = [...new Set(rooms.flatMap(r => r.amenities))];

    return (
        <div className="rooms-page">
            <div className="container">
                <div className="rooms-header">
                    <h1>Discover Your Perfect Stay</h1>
                    <p>Explore our collection of unique accommodations</p>
                </div>

                <div className="rooms-search">
                    <SearchBar onSearch={handleSearch} inline />
                </div>

                <div className="rooms-content">
                    {/* Filters Sidebar */}
                    <aside className="rooms-filters">
                        <div className="filter-section">
                            <h3 className="filter-title">Property Type</h3>
                            <div className="filter-options">
                                {roomTypes.map(type => (
                                    <label key={type} className="filter-option">
                                        <input
                                            type="radio"
                                            name="type"
                                            value={type}
                                            checked={filters.type === type}
                                            onChange={(e) => handleFilterChange('type', e.target.value)}
                                        />
                                        <span>{type === 'all' ? 'All Types' : type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="filter-section">
                            <h3 className="filter-title">Price Range</h3>
                            <div className="filter-price">
                                <input
                                    type="range"
                                    min="0"
                                    max="40000"
                                    value={filters.priceRange[1]}
                                    onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                                    className="price-slider"
                                />
                                <div className="price-display">
                                    <span>₹0</span>
                                    <span>₹{filters.priceRange[1]}</span>
                                </div>
                            </div>
                        </div>

                        <div className="filter-section">
                            <h3 className="filter-title">Amenities</h3>
                            <div className="filter-options">
                                {allAmenities.slice(0, 8).map(amenity => (
                                    <label key={amenity} className="filter-option">
                                        <input
                                            type="checkbox"
                                            value={amenity}
                                            checked={filters.amenities.includes(amenity)}
                                            onChange={(e) => {
                                                const newAmenities = e.target.checked
                                                    ? [...filters.amenities, amenity]
                                                    : filters.amenities.filter(a => a !== amenity);
                                                handleFilterChange('amenities', newAmenities);
                                            }}
                                        />
                                        <span>{amenity}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Rooms Grid */}
                    <div className="rooms-grid-container">
                        <div className="rooms-results-header">
                            <h2>{filteredRooms.length} Properties Available</h2>
                        </div>

                        <div className="rooms-grid">
                            {filteredRooms.map(room => (
                                <RoomCard key={room.id} room={room} />
                            ))}
                        </div>

                        {filteredRooms.length === 0 && (
                            <div className="no-results">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3>No rooms found</h3>
                                <p>Try adjusting your filters to see more results</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rooms;
