import React, { Component } from "react";
import PropTypes from 'prop-types';

import './Timer.scss'

export default class Timer extends Component {
    constructor() {
        super();
        this.state = {
            timer: '00:00'
        }
    }

    componentDidMount() {
        console.log('mount')
        this.timerID = setInterval(this.onChangeTimer, 3000)
    }


    componentWillUnmount() {
        console.log('unmount')
        const { taskState } = this.props;
        if (taskState === 'completed') clearInterval(this.timerID)
    }

    onChangeTimer = () => {
        this.setState({
            timer: Math.floor(Math.random() * 50 + 22)
        })
    }

    onStartTask = () => {
        console.log('start')
    }

    onPauseTask = () => {
        console.log('pause')
    }

    render() {
        const { timer } = this.state;

        return (
            <>
                <button
                    className="icon icon-play"
                    type="button"
                    aria-label="Icon Play"
                    onClick={this.onStartTask}
                />
                <button
                    className="icon icon-pause"
                    type="button"
                    aria-label="Icon Pause"
                    onClick={this.onPauseTask}
                />
                <span className="timer">{timer}</span>
            </>
        )
    }
}


Timer.defaultProps = {
    taskState: ''
}

Timer.propTypes = {
    taskState: PropTypes.string
}