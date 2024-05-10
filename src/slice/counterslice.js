import { createSlice } from '@reduxjs/toolkit'

const initialState = {
count : 0
}

const counterslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    inc : (state)=>{

        state.count = state.count+1;
    },
    dec : (state)=>{

        state.count =  state.count -1;
    }


  }
});

export const {inc,dec} = counterslice.actions

export default counterslice.reducer