import React, { useState } from 'react'
import { apiData } from '../../utils/index';
import Search from '../ui/Search';
import GameItems from './GameItems';

const GameListGrid = () => {
  const [text, setText] = useState("");

  // console.log(apiData);

  return (
    <>
      <Search text = {text} setText = {setText}/>
      <section className='cards'>
        {apiData.filter( data => data.Topic.toLowerCase().includes(text.toLowerCase())).map((item, index) => (
          <GameItems key={index} item={item}/>
        ))}
      </section>
    </>
  )
  
   
}

export default GameListGrid;
