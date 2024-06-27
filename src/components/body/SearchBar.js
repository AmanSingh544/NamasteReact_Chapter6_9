import React, { useState } from "react";
import './resturants.css'
const SearchBar =({applySearch})=>{
    const [input,setInput]= useState('');
    const handleSearch=()=>{
        applySearch && applySearch(input);
    }
    return(
        <>
        <div className="searchbar-container">
            <div className="searchbar-content">
                <input
                type="text"
                placeholder="Search"
                value={input} 
                onChange={(e)=>setInput(e.target.value)}
                ></input>
            </div>
            <div className="search-button">
                <button onClick={handleSearch} type="submit">Search</button>
            </div>
        </div>
        </>
    )
}

export default SearchBar;