import React from 'react'
import './Card.css'

function Card() {
  return (
    <div class="card">
    <div class="img-container">
        <img src="../images/john-smith.jpg" alt="i-1"/>
        <span>- smith <br/> Cheif Executive officer</span>
    </div>
    <div class="img-container">
        <img src="../images/john-smith.jpg" alt="i-2"/>
        <span>-Johnsmith <br/> Vice president</span>
    </div>
    <div class="img-container">
        <img src="../" alt="i-3"/>
        <span>-John <br/> Chief Financial Officer</span>
    </div>
</div>
  )
}

export default Card