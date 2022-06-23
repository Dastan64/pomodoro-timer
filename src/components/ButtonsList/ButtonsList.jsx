import React, { useState } from 'react';
import styled from './ButtonsList.module.css';
import Button from '../Button/Button';
import { buttons } from '../../data/buttons';

const ButtonsList = ({ font, color }) => {
    const [activeButton, setActiveButton] = useState(1);
    const toggleActive = (id) => setActiveButton(id)

    return (
        <div className={styled.buttonsListContainer}>
            <div className={styled.buttonsList}>
                {buttons.map(button => <Button font={font} color={color} title={button.title} active={activeButton}
                                               onClick={toggleActive} key={button.id} id={button.id}/>)}
            </div>
        </div>
    );
};

export default ButtonsList;