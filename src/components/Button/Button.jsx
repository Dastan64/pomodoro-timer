import React from 'react';
import styled from './Button.module.css';

import { useDispatch } from 'react-redux';
import { setCurrent } from '../../features/timer/timerSlice';

const Button = ({ font, color, button, active, setActiveButton, id, reset }) => {
    const { title, type } = button;
    const dispatch = useDispatch();

    const style = {
        fontFamily: font,
        color: active === id ? '#1E213F' : '#D7E0FF40',
        backgroundColor: active === id ? color : 'transparent'
    }

    const handleClick = () => {
        setActiveButton(id, type);
        dispatch(setCurrent(type));
        reset();
    }

    return <button className={styled.button} type="button" style={style} onClick={handleClick}>{title}</button>
};

export default Button;
