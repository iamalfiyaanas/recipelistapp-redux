import React from 'react'


const Footer = () => {
  return (
    <div style={{height:'150px'}} className='mt-5 w-full bg-black items-center p-5'>
      <div className="d-flex justify-content-center" >
      <div className="links ms-3 fw-bolder" style={{color:'white'}}>SEARCH RECIPES</div>
        <div className="links ms-3 fw-bolder" style={{color:'white'}}>LOG IN</div>
        <div className="guides ms-3 fw-bolder" style={{color:'white'}}>JOIN FREE</div>
        <div className="contact ms-3 fw-bolder" style={{color:'white'}}>TERMS OF SERVICE</div>
        <div className="contact ms-3 fw-bolder" style={{color:'white'}}>PRIVACY</div>
        <div className="contact ms-3 fw-bolder" style={{color:'white'}}>GET SUPPORT</div>
      </div>
      <p className='text-center mt-3'>Copyright © Jan 2024 Batch, recipeList App. Built with react-redux.</p>
    </div>
  )
}

export default Footer