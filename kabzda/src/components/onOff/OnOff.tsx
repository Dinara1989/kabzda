import React from 'react';
import s from './OnOff.module.css';

const OnOff = () => {
    return (
        <div className={s.main}>
            <button className={s.button}>On</button>
            <button className={s.button}>Off</button>
            <span className={s.dot}></span>
        </div>
    );
};

export default OnOff;