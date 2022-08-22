import React from 'react'
import './CreateListing.css'
function CreateListing() {
  return (
    <div className='create-listing'>
<form className='create-listing-form' action="">

<div className='create-listing-form-group'>
<input autoFocus={true} type="text" placeholder="property-title" className="create-listing-text" />
   <label htmlFor="listingimg" className='create-listing-img-upload'>
    <i class="upload-icon fa-solid fa-upload"></i>
   </label>
   <input type="file" id='listingimg' style={{display: 'none'}} />
</div>
<div className='create-listing-form-group'>

    <textarea className='create-listing-text create-listing-desc' placeholder='Property description' spellcheck ='false'>

    </textarea>
</div>

    
</form>
<button className='create-listing-button' >Submit</button>
    </div>
  )
}

export default CreateListing
// in auto focus property of input tag we have written its result in curly braces this is because this is JSX not normal html so any property like this equal to valid its has to be in curly bracket 