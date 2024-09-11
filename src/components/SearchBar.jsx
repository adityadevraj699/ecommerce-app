/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SearchBar.css'; // Custom styles for search results

const SearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [showCategoryMessage, setShowCategoryMessage] = useState(false);

  // Available categories
  const categories = [
    'All',
    'Electronics',
    'Fashion',
    'Home',
    'Sports',
    'Books',
    'Toys',
    'Beauty',
    'Automotive',
  ];

  // Extract the search query from the URL if available
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || '';
    setSearchQuery(query);
  }, [location]);

  // Filter categories based on the search query
  useEffect(() => {
    if (searchQuery) {
      const filtered = categories.filter((category) =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCategories(filtered);
      setShowCategoryMessage(filtered.length === 0);
    } else {
      setFilteredCategories(categories); // Show all categories if no search query
      setShowCategoryMessage(false); // Hide message if no search query
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery) {
      // Navigate to category page with query parameter
      navigate(`/products?category=${searchQuery}`);
    }
  };

  return (
    <div className="container search-bar-page">
      <h2>Search Categories</h2>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="d-flex mb-4 search-form">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary search-button ms-2">Search</button>
      </form>

      {/* Display Categories */}
      <div className="categories-list mt-4">
        <h4>Available Categories:</h4>
        {showCategoryMessage && (
          <p>No categories match your search.</p> // Show no categories match message if needed
        )}
        <ul className="list-group">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <li
                key={category}
                className="list-group-item category-item"
                onClick={() => navigate(`/products?category=${category}`)}
              >
                {category}
              </li>
            ))
          ) : (
            <p>Loading categories...</p> // Loading message if categories are not yet loaded
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
