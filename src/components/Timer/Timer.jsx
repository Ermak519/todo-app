/*eslint-disable */

import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import './Timer.scss'

export default function Timer({ timerStatus, timer: time }) {
    const [timer, setTimer] = useState({ total: 0, sec: 0, min: 0 })

    const tick = () => {
        if (timerStatus === 'play') {
            setTimer({
                ...timer,
                total: timer.total + 1,
                sec: timer.total % 60 ? timer.sec + 1 : 0,
                min: !(timer.total % 60) && timer.total !== 0 ? timer.min + 1 : timer.min
            })
        }
    }

    useEffect(() => {
        const timerID = setInterval(() => { tick() }, 1000)
        return () => { clearInterval(timerID); }
    })

    return <span className="timer">{`${time.min}:${time.sec}`}</span>
}

Timer.defaultProps = {
    timerStatus: ''
}

Timer.propTypes = {
    timerStatus: PropTypes.string
}

