import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pomodoroMinutes: 25,
    shortBreakMinutes: 5,
    longBreakMinutes: 15,
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setPomodoro(state, action) {
            state.pomodoroMinutes = action.payload;
        },
        setShortBreak(state, action) {
            state.shortBreakMinutes = action.payload
        },
        setLongBreak(state, action) {
            state.longBreakMinutes = action.payload
        },
    }
})

export const {setPomodoro, setShortBreak, setLongBreak} = timerSlice.actions;

export default timerSlice.reducer;