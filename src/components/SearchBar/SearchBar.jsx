import React from 'react'
import './SearchBar.css'

export default function SearchBar({searchItem, onSearchChange}) {

  return (
    <div className="search-bar">
      <input type="text"
        value={searchItem}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder='Search your item'
        className='search-input'
      />
    </div>
  )
}
