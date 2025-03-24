"use client"
import "./Css/SearchBar.css"

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search for food items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}

export default SearchBar

