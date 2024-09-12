/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SearchBar.css'; 

const SearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [showCategoryMessage, setShowCategoryMessage] = useState(false);

 
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

 
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || '';
    setSearchQuery(query);
  }, [location]);


  useEffect(() => {
    if (searchQuery) {
      const filtered = categories.filter((category) =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCategories(filtered);
      setShowCategoryMessage(filtered.length === 0);
    } else {
      setFilteredCategories(categories);
      setShowCategoryMessage(false);
    }
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery) {
      
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
          <p>No categories match your search.</p> 
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
            <p>Loading categories...</p> 
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
