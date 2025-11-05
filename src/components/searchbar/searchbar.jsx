import React, { useState } from "react";
import GoButton from "../gobutton/gobutton";
import "./searchbar.scss";


const SearchBar = () => {
    const [eventName, setEventName] = useState("");
    const [location, setLocation] = useState("");
  
    const handleSearch = () => {
      console.log("Buscando eventos con:", { eventName, location });
    };
  
    return (
        <>
      <section className="search-bar">
        <input
          type="text"
          placeholder="Event name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          
          size={Math.max(eventName.length, 12)} //para hacer el imput mas largo
          className="search-bar__input"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          size={Math.max(location.length, 10)}
          className="search-bar__input"
        />
        
      </section>
      <GoButton onClick={handleSearch} />
      </>
    );
  };
  
  export default SearchBar;