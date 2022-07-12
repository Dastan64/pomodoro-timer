import React, { useState } from 'react';
import styled from "./App.module.css";
import './App.module.css';
import Timer from '../Timer/Timer';
import Popup from '../Popup/Popup';

function App() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const handleClick = () => setIsSettingsOpen(!isSettingsOpen);

    return (
        <div className={styled.app}>
            <h1 className={styled.appMainHeading}>pomodoro</h1>
            <Timer/>
            <Popup isSettingsOpen={isSettingsOpen} setIsSettingsOpen={setIsSettingsOpen}/>
            <button className={styled.settingsButton} onClick={handleClick}>
                <svg className={styled.settingsIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={40} height={40}
                     stroke="#fff" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
            </button>
        </div>
    );
}

export default App;
