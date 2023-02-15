import React, { useState } from "react";


function AddListingForm( {onAddListing, user} ) {


    const [showForm, setShowForm] = useState(false)

    const initialValue = {
        itemname: "",
        image: "",
        category: "",
        description: "",
        tag: ""
    }

    const [formData, setFormData] = useState(initialValue)

    function handleInput(e) {
        const name = e.target.name
        const value = e.target.value
        setFormData({...formData, [name]:value})
    }

    function handleSubmit(e) {
      e.preventDefault()

      const newListing = {
          artist: user.username,
          itemname: formData.itemname,
          image: formData.image,
          category: formData.category,
          description: formData.category,
          tag: formData.tag
      }

      user.listings = [...user.listings, newListing]


      fetch("http://localhost:3200/users/" + user.id, {
        method: "put",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => 
        onAddListing(user.id, data)
        )

      setFormData(initialValue)
    }

    function handleClick() {
      setShowForm(!showForm)
    }

    return (
    <div className="new-listing-form">
      <button className="add-listing-btn" onClick={handleClick}>Add New Listing</button>
      {
        showForm ?

        <form onSubmit={handleSubmit} className="add-new-form">
          <input 
            type="text" 
            name="itemname" 
            placeholder="item name" 
            value={formData.itemname}
            onChange={handleInput}
          />
          <input 
            type="text" 
            name="image" 
            placeholder="Image URL" 
            value={formData.image}
            onChange={handleInput}/>
          <input 
            type="text" 
            name="category" 
            placeholder="e.g. pottery, painting, sculptures"
            value={formData.price}
            onChange={handleInput} />
          <input 
            type="text" 
            name="description" 
            placeholder="description"
            value={formData.description}
            onChange={handleInput} />
          <input 
            type="text" 
            name="tag" 
            placeholder="tag"
            value={formData.tag}
            onChange={handleInput} />
            
          <input type="submit" />
        </form>

        : null
      }
    </div>
    )
}

export default AddListingForm