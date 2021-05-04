import React from 'react'

const GameItems = ( { item } ) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.GameImage} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.GameTitle}</h1>
          <ul>
            <li>
              <strong>Topic:</strong> {item.Topic}
            </li>
            <li>
              <strong>Game Description:</strong> {item.GameDescription}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
  
}

export default GameItems;
