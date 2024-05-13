import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    rockets: [],
    status: 'idle',
    error: null,
 };
    


const ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await axios.get(ROCKET_URL);
    return response.data;
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchRockets.pending, (state) => {
    state.status = 'loading';
    })
    .addCase(fetchRockets.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.rockets = action.payload;
    })
    .addCase(fetchRockets.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.error.message;
    });
    },

});

export const {} = rocketSlice.actions

export default rocketSlice.reducer