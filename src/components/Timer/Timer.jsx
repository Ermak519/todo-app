import React, { Component } from "react";
import PropTypes from 'prop-types';

import './Timer.scss'

export default class Timer extends Component {
    constructor() {
        super();

        this.state = {
            total: 0,
            sec: 0,
            min: 0,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => { this.tick() }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick = () => {
        const { total, sec, min } = this.state;
        const { timerStatus } = this.props;

        let newTotal = total;
        let newSec = sec;
        let newMin = min;

        if (timerStatus === 'play') {
            this.setState({
                total: newTotal += 1,
                sec: newTotal % 60 ? newSec += 1 : 0,
                min: !(newTotal % 60) ? newMin += 1 : newMin,
            });
        }
    }

    render() {
        const { sec, min } = this.state;

        return (
            <span className="timer">{`${min}:${sec}`}</span>
        )
    }
}

Timer.defaultProps = {
    timerStatus: ''
}

Timer.propTypes = {
    timerStatus: PropTypes.string
}

