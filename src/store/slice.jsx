import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  pastes: localStorage.getItem("pastes")?JSON.parse(localStorage.getItem("pastes")):[],
}

export const Slice = createSlice({
  name:'paste',
  initialState,
  reducers: {
    add: (state,action) => {
      const paste=action.payload
      state.pastes.push(paste)
    //   console.log(`state.pastes`,JSON.stringify(state.pastes))
      localStorage.setItem("pastes",JSON.stringify(state.pastes))
      toast("past updated")
    },
    delete: (state,action) => {
        const pasteId=action.payload
        const index=state.pastes.findIndex((item)=>item.id===pasteId)
        if(index>=0){
          state.pastes.splice(index,1)
          localStorage.setItem("pastes",JSON.stringify(state.pastes))
          toast("paste deleted")
        }
    },
    update: (state, action) => {
      const paste=action.payload
      const index=state.pastes.findIndex((item)=>item.id===paste.id)
      if(index>=0){
        state.pastes[index]=paste
        localStorage.setItem("pastes",JSON.stringify(state.pastes))
        toast("paste updated")
      }
    },
  },
})

export const sliceAction=Slice.actions

export default Slice.reducer