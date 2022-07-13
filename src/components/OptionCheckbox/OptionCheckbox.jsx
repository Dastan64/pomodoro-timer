import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from '../../features/color/colorSlice';
import { setFont } from '../../features/font/fontSlice';
import styled from './OptionCheckbox.module.css';
import tick from '../../assets/images/tick.svg';

const OptionCheckbox = ({ item }) => {
    const dispatch = useDispatch();
    const currentValue = useSelector(state => state[item.type][item.type]);

    const changeSelectedOption = (option) => {
        const {value, type} = option;
        switch (type) {
            case 'color':
                dispatch(setColor(value))
                break;
            case 'font':
                dispatch(setFont(value));
                break;
            default:
                break;
        }
    }

    const styles = {
        color: {
            backgroundColor: item.value,
        },
        font: {
            fontFamily: item.value,
        }
    }

    const defineStyles = () => {
        switch (item.type) {
            case "color": {
                return styles.color;
            }
            case "font": {
                return styles.font;
            }
            default: break;
        }
    }

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    name={item.type}
                    className={styled.input}
                    onChange={() => changeSelectedOption(item)}
                />
                <span className={`${styled.inputBox} ${item.value === currentValue ? styled.inputBoxActive : ''}`}
                style={defineStyles()}
                >
                    {item.type === 'color' && item.value === currentValue ? <img src={tick} alt=""/> : ''}
                    {item.type === 'font' && 'Aa'}
                </span>
            </label>
        </div>
    );
};

export default OptionCheckbox;
