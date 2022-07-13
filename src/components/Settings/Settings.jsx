import React from 'react';
import styled from '../Popup/Popup.module.css';

//Data
import { colorsList } from '../../data/colors';
import { fontsList } from '../../data/fonts';
import { minutesTypes } from '../../data/minuteTypes';

//Components
import NumberInput from '../NumberInput/NumberInput';
import OptionCheckbox from '../OptionCheckbox/OptionCheckbox';

const Settings = () => {

    const colors = colorsList.map(color => <OptionCheckbox item={color} key={color.id}/>)
    const fonts = fontsList.map(font => <OptionCheckbox item={font} key={font.id}/>)

    return (
        <>
            <div className={styled.popupSection}>
                <h3 className={styled.popupSectionTitle}>Time (minutes)</h3>
                <div className={styled.popupInputs}>
                    {minutesTypes.map((item, index) => <NumberInput item={item} key={index}/>)}
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
        </>
    );
};

export default Settings;
