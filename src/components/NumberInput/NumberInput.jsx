import React, { useState } from 'react';
import styled from './NumberInput.module.css';
import { useDispatch } from 'react-redux';
import { setLongBreak, setPomodoro, setShortBreak } from '../../features/timer/timerSlice';

const NumberInput = ({item}) => {
    const [value, setValue] = useState(5);
    const {label, type} = item;
    const dispatch = useDispatch();

    const saveChanges = () => {
        switch (type) {
            case 'pomodoro':
                dispatch(setPomodoro(value));
                break;
            case 'short':
                dispatch(setShortBreak(value));
                break;
            case 'long':
                dispatch(setLongBreak(value));
                break;
            default: break;
        }
    }

    const increaseTime = () => setValue(prev => prev + 1);
    const decreaseTime = () => setValue(prev => prev - 1);

    return (
        <div className={styled.inputContainer}>
            <label htmlFor="">{label}</label>
            <input className={styled.input} value={value} type="number" min={0}
                   onChange={e => setValue(+e.target.value)} onBlur={saveChanges}/>
            <button className={styled.inputBtn} type="button" onClick={increaseTime}>
                <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6L7 2L13 6" stroke="#1E213F" strokeOpacity="0.25" strokeWidth="2"/>
                </svg>
            </button>
            <button className={styled.inputBtn} type="button" onClick={decreaseTime}>
                <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 5L13 1" stroke="#1E213F" strokeOpacity="0.25" strokeWidth="2"/>
                </svg>
            </button>
        </div>
    );
};

export default NumberInput;