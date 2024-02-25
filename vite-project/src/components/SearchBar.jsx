import React, { useState } from 'react';
import axios from 'axios';
import classes from '../modules/SearchBar.module.scss';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('')

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_l8WtZwIJ9A4QczwMK4Qion4FL92k0&ipAddress=${input}`)
      onSearch(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <input
        className={classes['search-input']}
        type="text"
        placeholder="Enter IP Address"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={classes['search-button']} onClick={handleSearch}>></button>
    </div>
  )
}

export default SearchBar;
