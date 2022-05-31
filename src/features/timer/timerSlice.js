import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    time: 'June 12, 2022 20:00:00',
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTimer(state, action) {
            state.time = action.payload;
        }
    }
})

export const {setTimer} = timerSlice.actions;

export default timerSlice.reducer;