import React from 'react'
import './Cards.css';

const Cards = () => {
  return (
      <div className="row">
        
        <div className="column">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1534531688091-a458257992cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHNxdWFyZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="card image" style={{width:"100%", height:"50%"}}/>
            <h3>What is Lorem Ipsum?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
          <img src="https://images.unsplash.com/photo-1534531688091-a458257992cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHNxdWFyZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="card image" />
          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          </div>
      </div>
    
  </div>



      
  )
}
export default Cards;