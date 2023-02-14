import React, { useState } from "react";


function AddListingForm( {onAddListing, user} ) {

    const initialValue = {
        itemname: "",
        image: "",
        category: "",
        description: "",
        tag1: "",
        tag2: "",
        tag3: "",
        tag4: "",
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
          tag1: formData.tag1,
          tag2: formData.tag2,
          tag3: formData.tag3,
          tag4: formData.tag4
      }

      // console.log(user.listings)
      user.listings = [...user.listings, newListing]
      // console.log(user.listings)
      // const listings = [...user.listings, newListing]

      fetch("http://localhost:3200/users/" + user.id, {
        method: "put",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => 
        // console.log(data)
        onAddListing(user.id, data)
        )

      setFormData(initialValue)
    }


    return (
        <div className="new-listing-form">
      <h2>New Listing</h2>
      <form onSubmit={handleSubmit}>
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
          name="tag1" 
          placeholder="tag1"
          value={formData.tag1}
          onChange={handleInput} />
          <input 
            type="text" 
            name="tag2" 
            placeholder="tag2"
            value={formData.tag2}
            onChange={handleInput} />
          <input 
            type="text" 
            name="tag3" 
            placeholder="tag3"
            value={formData.tag3}
            onChange={handleInput} />
          <input 
          type="text" f
          name="tag4" 
          placeholder="tag4"
          value={formData.tag4}
          onChange={handleInput} />
          
          


        <button type="submit">Add</button>
      </form>
    </div>
    )
}

export default AddListingForm