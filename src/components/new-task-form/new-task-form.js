import PropTypes from "prop-types"
import { Component } from 'react';
import './new-task-form.css';

export default class NewTaskForm extends Component {
    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label !== 0) {
            this.props.onAddTask(this.state.label);
            this.setState({
                label: ''
            });
        };
    }

    render() {
        return (
            <>
                <form onSubmit={this.onSubmit}>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        onChange={this.onLabelChange}
                        value={this.state.label} />
                </form>
            </>
        );
    }
}

NewTaskForm.defaultProps = {
    onAddTask: () => { },
}

NewTaskForm.propTypes = {
    onAddTask: PropTypes.func,
}
