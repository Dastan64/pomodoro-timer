import React from 'react';
import styled from './Popup.module.css';

//Icons
import closeIcon from '../../assets/images/close-icon.svg';

const Popup = ({ isOpen, setIsOpen, title, children, animated }) => {
    const handleClose = () => setIsOpen(!isOpen);

    return (
        <div className={`${isOpen ? '' : styled.popupHidden} ${styled.popup}`}>
            <div className={`${styled.popupContent} ${animated ? styled.popupContentAnimated : ''}`}>
                <h3 className={styled.popupHeading}>{title}</h3>
                {children}
                <button className={styled.popupCloseBtn} onClick={handleClose}>
                    <img src={closeIcon} alt="" width={14} height={14}/>
                </button>
                {title === "Settings" && <button type="button" className={styled.popupBtn} onClick={handleClose}>Apply</button>}
            </div>
        </div>
    );
};

export default Popup;
