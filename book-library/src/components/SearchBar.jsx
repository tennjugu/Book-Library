const SearchBar = () => {
    return (
        <form className='searchBar'>
            <input type="text" id='search' name='search' placeholder='search a book'/>
            <label htmlFor="search">Search Area</label>
            <button type="submit" className="searchButton">
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
        </form>
    )
}

export default SearchBar