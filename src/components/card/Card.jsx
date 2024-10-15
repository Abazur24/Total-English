import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({title, image, target, imgalt}) {
    const navigate = useNavigate()

  return (
    <div className="card">
              <h3>{title}</h3>

              <img className="course-img" src={image} alt={imgalt}/>
              <button className="card-button" onClick={() => navigate(target)}>Find More</button>
            </div>
  )
}

export default Card