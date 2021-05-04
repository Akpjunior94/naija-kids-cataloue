import React from 'react'

const Search = ({ text, setText } ) => {


  const handleChange = (q) => {
    setText(q)
    // console.log(text)
  }

  return (
      <section className='search'>
        <form>
          <input 
            type='text' 
            className='form-control' 
            placeholder='Search Games' 
            value={text}
           onChange={(e) => handleChange(e.target.value)}
            autoFocus 
          />
        </form>
      </section>
  )
}

export default Search
