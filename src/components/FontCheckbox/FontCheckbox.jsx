import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from '../ColorCheckbox/ColorCheckbox.module.css';
import { setFont } from '../../features/font/fontSlice';

const FontCheckbox = ({ font }) => {
    const dispatch = useDispatch();
    const selectedFont = useSelector(state => state.font.font);

    const changeFont = (font) => dispatch(setFont(font))

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    name="font"
                    className={styled.input}
                    onChange={() => changeFont(font.font)}
                />
                <span
                    className={`${styled.inputBox} ${font.font === selectedFont ? styled.inputBoxActive : ''}`}
                    style={{ fontFamily: `${font.font}` }}>
                    Aa
                </span>
            </label>
        </div>
    );
};

export default FontCheckbox;
