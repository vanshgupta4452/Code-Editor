import React from 'react'
import { useDispatch } from 'react-redux'
import { sliceAction } from '../store/slice'
import { toast } from 'react-toastify'
import { Link } from 'react-router'

const PasteList = ({paste}) => {
   const dispatch=useDispatch()
   const handledelete=(id)=>{
    console.log(`id`,id)
      dispatch(sliceAction.delete(id))
   }

  return (
    <div className="card text-center pastelist">
        <div className="card-header">
            <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
                <Link className="nav-link active" to={`/paste?pasteId=${paste?.id}`}>Edit</Link>
            </li>
            <li className="nav-item">
                <button type="button" className="nav-link" onClick={()=>handledelete(paste.id)} >Delete</button>
            </li>
            <li className="nav-item">
                <button type="button" className="nav-link" aria-disabled="true" onClick={() => {navigator.clipboard.writeText(paste?.content), toast.success("copied")}}>Copy</button>
            </li>
            </ul>
        </div>
        <div className="card-body">
            <h5 className="card-title">{paste.title}</h5>
                <p className="card-text">{paste.content}</p>
            <Link to={`/view?pasteId=${paste?.id}`} className="btn btn-primary">View</Link>
        </div>
    </div>
  )
}

export default PasteList