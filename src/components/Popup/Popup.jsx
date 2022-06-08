import React from 'react';
import styled from './Popup.module.css';

//Icons
import closeIcon from "../../assets/images/close-icon.svg";

//Data
import { colorsList } from '../../data/colors';

//Components
import ColorCheckbox from '../ColorCheckbox/ColorCheckbox';
import FontCheckbox from '../FontCheckbox/FontCheckbox';
import { fontsList } from '../../data/fonts';
import NumberInput from '../NumberInput/NumberInput';

const Popup = ({isSettingsOpen, setIsSettingsOpen}) => {
    const colors = colorsList.map(color => {
        return <ColorCheckbox color={color} key={color.id}/>
    })

    const fonts = fontsList.map(font => {
        return <FontCheckbox font={font} key={font.id}/>
    })

    const handleClose = () => {
        setIsSettingsOpen(!isSettingsOpen)
    }
    return (
        <div className={`${isSettingsOpen ? '' : styled.popupHidden} ${styled.popup}`}>
            <div className={styled.popupContent}>
                <h3 className={styled.popupHeading}>Settings</h3>
                <div className={styled.popupSection}>
                    <h3 className={styled.popupSectionTitle}>Time (minutes)</h3>
                    <div className={styled.popupInputs}>
                        <NumberInput label={"pomodoro"}/>
                        <NumberInput label={"short break"}/>
                        <NumberInput label={"long break"}/>
                    </div>
                </div>
                <div className={styled.popupSection}>
                    <h3 className={styled.popupSectionTitle}>Font</h3>
                    <div className={styled.popupOptions}>
                        {fonts}
                    </div>
                </div>
                <div className={styled.popupSection}>
                    <h3 className={styled.popupSectionTitle}>Color</h3>
                    <div className={styled.popupOptions}>
                        {colors}
                    </div>
                </div>
                <button className={styled.popupBtn} onClick={handleClose}>Apply</button>
                <button className={styled.popupCloseBtn} onClick={handleClose}>
                    <img src={closeIcon} alt="" width={14} height={14}/>
                </button>
            </div>
        </div>
    );
};

export default Popup;