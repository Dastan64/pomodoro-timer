import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    current: 'pomodoro',
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setPomodoro(state, action) {
            state.pomodoro = action.payload;
        },
        setShortBreak(state, action) {
            state.shortBreak = action.payload
        },
        setLongBreak(state, action) {
            state.longBreak = action.payload
        },
        setCurrent(state, action) {
            state.current = action.payload;
        }
    }
})

export const { setPomodoro, setShortBreak, setLongBreak, setCurrent } = timerSlice.actions;

export default timerSlice.reducer;
