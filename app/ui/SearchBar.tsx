// SearchBar.tsx
import React from 'react';

const SearchBar = ({ onSearch }) => {
    const handleChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className="my-4">
            <input
                type="text"
                placeholder="Search..."
                onChange={handleChange}
                className="border p-2 rounded w-full"
            />
        </div>
    );
};

export default SearchBar;