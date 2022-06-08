import React from 'react';
import styled from "./NumberInput.module.css";

const NumberInput = ({label}) => {
    return (
        <div className={styled.inputContainer}>
            <label htmlFor="">{label}</label>
            <input className={styled.input} type="number" min={0}/>
            <button className={styled.inputBtn} type="button">
                <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6L7 2L13 6" stroke="#1E213F" strokeOpacity="0.25" strokeWidth="2"/>
                </svg>
            </button>
            <button className={styled.inputBtn} type="button">
                <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 5L13 1" stroke="#1E213F" strokeOpacity="0.25" strokeWidth="2"/>
                </svg>
            </button>
        </div>
    );
};

export default NumberInput;