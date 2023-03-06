import React from 'react';
import '../Container/App.css';

const SearchBox = ({searchChange}) => {

    return (
        <input className='searchInput pa3 ba bg-gold near-black' type='search' placeholder='Search Digimon Card' onChange={searchChange}></input>
    );
};

export default SearchBox;