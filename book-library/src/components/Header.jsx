const Header = () => {
    return (
        <div className="header">
            <div className='logo'>
                <img src="../src/assets/book.svg" alt="logo" />
                <h1 className='logoText'>Tenn&apos;s Library</h1>
            </div>
            <div className='searchBar'>
                <input type="text" id='search' placeholder='search a book'/>
                <label htmlFor="search">Search Area</label>
                <button className="searchButton">
                    <img src="../src/assets/search.svg" alt="searchButton" />
                </button>
            </div>
        </div>
    )
}

export default Header