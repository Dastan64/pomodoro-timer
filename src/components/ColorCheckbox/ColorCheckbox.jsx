import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import tick from "../../assets/images/tick.svg";

import styled from './ColorCheckbox.module.css';
import { setColor } from '../../features/color/colorSlice';

const ColorCheckbox = ({color}) => {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();

    const changeSelectedColor = (color) => {
        console.log(color)
        if (!isActive) {
            dispatch(setColor(color))
        }
        setIsActive(!isActive)
    }
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    name="color"
                    className={styled.input}
                    onChange={() => {
                        changeSelectedColor(color.color);
                    }}
                />
                <span
                    className={`${styled.inputBox} ${isActive ? `${styled.inputBoxActive}` : ''}`}
                    style={{backgroundColor: `${color.color}`}}>
                    {isActive ? <img src={tick} alt=""/> : ''}
                </span>
            </label>
        </div>
    );
};

export default ColorCheckbox;