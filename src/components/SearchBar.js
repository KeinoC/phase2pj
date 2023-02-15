function SearchBar( { onSearch } ) {

    function handleSearch(e) {
        onSearch(e.target.value)
    }

    return (
        <div className="search-bar">
            <input
               type="text" 
               placeholder="Search By Artist..."
               onChange={handleSearch}/>
        </div>
        
    )
}

export default SearchBar