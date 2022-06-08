import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    color: '#F87070',
}

const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        setColor(state, action) {
            state.color = action.payload;
        }
    }
})

export const {setColor} = colorSlice.actions;

export default colorSlice.reducer;