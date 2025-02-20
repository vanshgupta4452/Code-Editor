import React, { useState } from 'react'
import PasteList from './pastelist'
import { useSelector } from 'react-redux'
const Home = () => {
  const [search,setsearch]=useState('')

  const paste=useSelector((store)=> store.counter.pastes)

  const filterdata = paste.filter((item) =>
    item.title && item.title.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className='home'>
      <div className="searchbar">
        <textarea class="form-control" placeholder="Search" id="floatingTextarea" value={search} onChange={(event)=>setsearch(event.target.value)}></textarea>
        <label for="floatingTextarea"></label>
      </div>
     {filterdata.length>0&&filterdata.map((item)=><PasteList key={item.id} paste={item}/>)} 
    
    
    </div>
  )
}

export default Home