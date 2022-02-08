import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import './Timer.scss'

export default function Timer({ timerStatus, timer, tickTimer }) {
    const { min, sec } = timer

    useEffect(() => {
        const timerID = setInterval(() => { tickTimer(timerStatus) }, 1000)
        return () => { clearInterval(timerID); }
    })

    return <span className="timer">{min}:{sec}</span>
}

Timer.defaultProps = {
    timerStatus: '',
    timer: {},
    tickTimer: () => { }
}

Timer.propTypes = {
    timerStatus: PropTypes.string,
    timer: PropTypes.object,
    tickTimer: PropTypes.func
}

