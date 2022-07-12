import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import tick from '../../assets/images/tick.svg';

import styled from './ColorCheckbox.module.css';
import { setColor } from '../../features/color/colorSlice';

const ColorCheckbox = ({ color }) => {
    const dispatch = useDispatch();
    const selectedColor = useSelector(state => state.color.color);

    const changeSelectedColor = (color) => dispatch(setColor(color))

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    name="color"
                    className={styled.input}
                    onChange={() => changeSelectedColor(color.color)}
                />
                <span
                    className={styled.inputBox}
                    style={{ backgroundColor: `${color.color}` }}>
                    {color.color === selectedColor ? <img src={tick} alt=""/> : ''}
                </span>
            </label>
        </div>
    );
};

export default ColorCheckbox;
