import React from 'react'
import { useRef,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router'
import { sliceAction } from '../store/slice'



const Paste = () => {
  
  const title=useRef()
  const content=useRef()
  const dispatch = useDispatch()
  const [searchParam,setsearchParam]=useSearchParams("PasteId")
  const pasteId=searchParam.get("pasteId")


  const pasteAll=useSelector(state=>state.counter.pastes)
  console.log(`paste all`,pasteAll)

  useEffect(() => {
    if(pasteId){
    const paste = pasteAll.find((p) => p.id == pasteId);

    title.current.value = paste.title;   
    content.current.value = paste.content;

    }
  }, [pasteId]);

  const handleSubmit=(event)=>{
    console.log(`handlesubmit ke andar`)
    event.preventDefault();
    console.log(`handlesubmit ke andar`)
    console.log(title.current.value,content.current.value)
    console.log(`handlesubmit ke andar`)
    const paste={
       title:title.current.value,
       content:content.current.value,
       id:pasteId || Date.now().toString(36)
    }
    if(pasteId){
      dispatch(sliceAction.update(paste))
      
    }
    else{
      dispatch(sliceAction.add(paste))
      
    }
    title.current.value=" ";
    content.current.value=" ";
  }

  return (
    <form className='paste' onSubmit={handleSubmit} >
      <div className='but-cont'>
          <button type="submit" className="btn btn-outline-primary button" >{pasteId?"Update":"Create"}</button>
          <button type="button" className="btn btn-outline-success button">Success</button>
      </div>
      <div>
          <textarea className="form-control area" placeholder="enter title" id="floatingTextarea" ref={title}></textarea>
          <label htmlFor="floatingTextarea"></label>
      </div>
      <div className="form-floating textarea">
          <textarea className="form-control area" placeholder="Leave a comment here" id="floatingTextarea" ref={content} ></textarea>
          <label htmlFor="floatingTextarea">enter code</label>
      </div>
    </form>
  )
}

export default Paste