import React from 'react';
import styled from "./Button.module.css";

const Button = ({font, color, title, active, onClick, id}) => {
    const handleClick = id => onClick(id);

    return (
        <button className={styled.button} type="button" style={{fontFamily: font, color: active === id ? '#1E213F' : '#D7E0FF40', backgroundColor: active === id ? color : 'transparent'}} onClick={() => handleClick(id)}>
            {title}
        </button>
    );
};

export default Button;