import React from 'react';
import Nav from './Nav';
import SearchForm from './SearchForm';

// returning the navigaiton and search-bar
const Header = (props) => {
    
    return (
    <header className="App-header">
        <SearchForm onSearch={props.onSearch}/>
        <Nav onSearch={props.onSearch}/>
    </header>
    );
}

export default Header;