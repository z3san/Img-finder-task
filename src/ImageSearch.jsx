import React, { useState } from 'react';
import axios from 'axios';

function ImageSearch() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle the search input change
  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

 // Function to handle the image search
const searchImages = async () => {
    const apiKey = '34356951-3a4bb17d165aa556d3972b9cf';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
      searchText
    )}&image_type=photo`;
  
    try {
      const response = await axios.get(url);
      const data = response.data;
      setSearchResults(data.hits);
    } catch (error) {
      console.error('Error searching images:', error);
    }
  };

  return (
    <div className="text-center">
      <input
        type="text"
        value={searchText}
        onChange={handleSearchInputChange}
        className="border border-gray-300 rounded px-2 py-1 inline-block w-1/3 mr-5"
        placeholder='Search Images'
        
      />
     
      <button
        onClick={searchImages}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-2"
      >
        Search
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {searchResults.map((image) => (
          <img key={image.id} src={image.webformatURL} alt={image.tags} />
        ))}
      </div>
    </div>
  );
}

export default ImageSearch;
