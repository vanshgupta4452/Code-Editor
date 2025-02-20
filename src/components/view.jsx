import React from 'react'
import { useRef,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router'
import { sliceAction } from '../store/slice'



const View = () => {
  
 
  
//   const [searchParam,setsearchParam]=useSearchParams("PasteId")
    const [searchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId"); // Get 'pasteId' from URL

console.log("Paste ID from URL:", pasteId);
  
  const pasteAll=useSelector(state=>state.counter.pastes)
 console.log(`paste all`,pasteAll)

  const paste= pasteAll.filter((p)=>p.id===pasteId)[0] 
  console.log(`paste `,paste)

  return (
    <form className='view'  >
      <div>
          <textarea className="form-control area" placeholder="enter title" id="floatingTextarea" disabled value={paste.title} ></textarea>
          <label htmlFor="floatingTextarea"></label>
      </div>
      <div className="form-floating textarea">
          <textarea className="form-control area" placeholder="Leave a comment here" id="floatingTextarea" disabled value={paste.content} ></textarea>
         
      </div>
    </form>
  )
}

export default View