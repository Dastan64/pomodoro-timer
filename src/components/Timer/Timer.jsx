import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styled from './Timer.module.css';
import sandWatch from '../../assets/images/sand-watch.svg';

//Components
import ButtonsList from '../ButtonsList/ButtonsList';
import Popup from '../Popup/Popup';

const Timer = ({ isPopupOpen, setIsPopupOpen }) => {
    const currentModeMinutes = useSelector(state => state.timer[state.timer.current]);
    const color = useSelector(state => state.color.color);
    const font = useSelector(state => state.font.font);

    const [minutes, setMinutes] = useState(currentModeMinutes);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [strokeDashoffset, setStrokeDashoffset] = useState(773);

    const overallSeconds = currentModeMinutes * 60;
    const strokeDashoffsetToSubtract = (773 / overallSeconds).toFixed(3);

    const reset = () => {
        setSeconds(0);
        setMinutes(currentModeMinutes);
        setStrokeDashoffset(773);
        setIsActive(false);
    }

    useEffect(() => {
        setMinutes(currentModeMinutes);
    }, [currentModeMinutes])

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(second => second - 1);
                    setStrokeDashoffset(prev => prev - strokeDashoffsetToSubtract);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval);
                        setIsPopupOpen(!isPopupOpen);
                        reset();
                    } else {
                        setMinutes(minute => minute - 1);
                        setStrokeDashoffset(prev => prev - strokeDashoffsetToSubtract);
                        setSeconds(59);
                    }
                }
            }, 1000)
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, minutes, seconds, strokeDashoffsetToSubtract])

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <ButtonsList font={font} color={color} reset={reset}/>
            <div className={styled.timer}>
                <div className={styled.timerBody}>
                    <div className={styled.timerContent}
                         style={{ fontFamily: font || 'Kumbh Sans, Segoe UI, sans-serif' }}>
                        <svg
                            className={styled.timerProgressBar}
                            height={270}
                            width={270}
                        >
                            <circle
                                stroke={color || '#F87070'}
                                fill="transparent"
                                strokeWidth={6}
                                strokeDasharray={773 + ', ' + 773}
                                strokeDashoffset={strokeDashoffset}
                                r={123}
                                cx={135}
                                cy={135}
                            />
                        </svg>
                        <div>
                            <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
                            <span>:</span>
                            <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
                        </div>
                        <button className={styled.timerToggleButton} onClick={handleToggle}>
                            {isActive ? <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" stroke="#D7E0FF"
                                      d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={52} height={52}
                                          viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                <path stroke="#D7E0FF" strokeLinecap="round" strokeLinejoin="round"
                                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                <path stroke="#D7E0FF" strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>}
                        </button>
                    </div>
                </div>
            </div>
            <Popup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} title={'Time is up!'} animated={true}>
                <p>It looks like your time is up!</p>
                <img src={sandWatch} alt="" width={80} height={80} draggable={false}/>
            </Popup>
        </>
    );
};

export default Timer;
