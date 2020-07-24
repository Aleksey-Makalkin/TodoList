import React from 'react'


import './Search.css'


function Search({onSearch}) {
    return (
        <input placeholder='Search' className='Search'
        onChange={(event) => onSearch(event.target.value)} />
    )
}


export default Search