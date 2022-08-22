import React from 'react'
import "./ListingDetail.css"
function ListingDetail() {
  return (
    <div className='listing-detail'>
       <div className='listing-detail-content'>
       <img className='listing-detail-image' src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
<h1 className='listing-detail-title'>

  Awesome property
  <div className='listing-detail-action'>
  <i class="listing-detail-action-icon fa-solid fa-pen-to-square"></i>
  <i class="listing-detail-action-icon fa-solid fa-trash-can"></i>
  </div>
  </h1>
  <div className='listing-detail-meta-info' >
    <span className='listing-detail-author' >Author - <strong>John Doe</strong></span>
    <span className='listing-detail-time' >1 day ago</span>
  </div>
       </div>
       <p className='listing-detail-description'>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus mattis mi at hendrerit. Etiam imperdiet ullamcorper lorem, at efficitur dui eleifend fringilla. Cras lacinia ac urna nec bibendum. Donec maximus libero id aliquet finibus. Curabitur ac nunc ex. Maecenas venenatis turpis at accumsan fermentum. Vestibulum gravida, augue vel dictum dapibus, libero mi pellentesque nibh, pulvinar mattis libero lectus eget quam. In hac habitasse platea dictumst. Vestibulum dapibus lectus justo, vel fermentum dui aliquam ut. In scelerisque semper bibendum.
Vestibulum in fringilla felis, ut lacinia arcu. Donec ipsum nisl, viverra ut risus sed, lacinia sollicitudin est. Aenean et libero a sem laoreet tincidunt. Quisque et cursus leo. Donec quis turpis at nunc sodales viverra. Curabitur quis ultricies lacus, at fringilla purus. In nec nisi et felis convallis feugiat. In hac habitasse platea dictumst. Aenean rhoncus, risus sit amet finibus scelerisque, nunc nisl placerat libero, a consectetur nunc leo nec metus. Nulla auctor nisi in nulla condimentum dignissim sed vitae leo.
       </p>
    </div>
  )
}

export default ListingDetail