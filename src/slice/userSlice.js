import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    data: [],
    isLoading:false,
    error:{}
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    UserRequest : (state)=>{

        state.isLoading = true;
    },
    UserSuc : (state,action) =>{

        state.data = action.payload,
        state.isLoading = false
    },
    UserError : (state,action)=>{

        state.error = action.payload,
        state.isLoading = false
    }



  }
});

export const {UserRequest,UserSuc,UserError} = userSlice.actions

export default userSlice.reducer