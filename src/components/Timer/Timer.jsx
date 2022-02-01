import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import './Timer.scss'

export default function Timer({ timerStatus }) {
    const [total, setTotal] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);

    const tick = () => {
        if (timerStatus === 'play') {
            setTotal(total + 1);
            setSec(total % 60 ? sec + 1 : 0);
            setMin(!(total % 60) && total !== 0 ? min + 1 : min)
        }
    }

    useEffect(() => {
        const timerID = setInterval(() => { tick() }, 1000)
        return () => { clearInterval(timerID); }
    })

    return <span className="timer">{`${min}:${sec}`}</span>
}

Timer.defaultProps = {
    timerStatus: ''
}

Timer.propTypes = {
    timerStatus: PropTypes.string
}

