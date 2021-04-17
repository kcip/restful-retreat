import React from 'react'
import './suggestionCard.scss'
import image from '../../assets/images/placeholder-image.png'
const SuggestionCard = () => {
  return (
    <div className="suggestionCard">
      <div className="suggestionCard__left">
        <img src={image} />
      </div>
      <div className="suggestionCard__right">
        <h3>Place name here</h3>
        <p>something else here</p>
      </div>
    </div>
  )
}

export default SuggestionCard


