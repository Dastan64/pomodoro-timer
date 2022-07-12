import React, { useState } from 'react';
import styled from './NumberInput.module.css';

import { useDispatch } from 'react-redux';
import { setLongBreak, setPomodoro, setShortBreak } from '../../features/timer/timerSlice';

const NumberInput = ({ item }) => {
    const [value, setValue] = useState(5);
    const { label, type } = item;
    const dispatch = useDispatch();

    const handleChange = e => setValue(+e.target.value)

    const saveChanges = () => {
        switch (type) {
            case 'pomodoro':
                dispatch(setPomodoro(value));
                break;
            case 'shortBreak':
                dispatch(setShortBreak(value));
                break;
            case 'longBreak':
                dispatch(setLongBreak(value));
                break;
            default:
                break;
        }
    }

    return (
        <div className={styled.inputContainer}>
            <label htmlFor="">{label}</label>
            <input className={styled.input} value={value === 0 ? '' : value} type="number" onChange={handleChange}
                   onBlur={saveChanges}/>
        </div>
    );
};

export default NumberInput;
