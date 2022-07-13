import React, { useState } from 'react';
import styled from './ButtonsList.module.css';
import Button from '../Button/Button';
import { buttons } from '../../data/buttons';

const ButtonsList = ({ font, color, reset }) => {
    const [activeButton, setActiveButton] = useState(1);

    return (
        <div className={styled.buttonsListContainer}>
            <div className={styled.buttonsList}>
                {buttons.map(button => <Button font={font} color={color} button={button} active={activeButton}
                                               setActiveButton={setActiveButton} key={button.id}
                                               id={button.id} reset={reset}/>)}
            </div>
        </div>
    );
};

export default ButtonsList;
