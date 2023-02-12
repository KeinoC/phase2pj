function Filter({onHandleFilter}) {

    function handleFilter(e) {
        onHandleFilter(e.target.value)
    }

    return (
        <>
            <select onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Painting">Painting</option>
                <option value="Sculpture">Sculpture</option>
                <option value="Pottery">Pottery</option>
            </select>
        </>
    )
}

export default Filter