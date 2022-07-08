import React from 'react'
import './card.css'

const Card = ({ children, color, showCardColor }) => {
    return (
        <div 
        className='card' 
        style={{ backgroundColor: color }} 
        onClick={() => showCardColor(color)}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    color: 'orange'
}

export default Card