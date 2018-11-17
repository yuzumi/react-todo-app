import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../containers/TextInput/TextInput';
import Button from '../../containers/Button/Button';
import './TaskForm.scss';

class TaskForm extends React.Component {
    state = {
        name: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    addTask = () => {
        const { name } = this.state;

        if (name.trim()) {
            this.props.addTask(name);
            this.setState({ name: '' });
        }
    }

    render() {
        const { name } = this.state;

        return (
            <form className="task-form">
                <div className="task-form__group">
                    <TextInput name="name" value={name} placeholder="Enter a task name..." handleChange={this.handleChange} />
                    <Button name="Add Task" type="button" handleClick={this.addTask} />
                </div>
            </form>
        );
    }
}

TaskForm.defaultTypes = {
    addTask: f => f
};

TaskForm.propTypes = {
    addTask: PropTypes.func
};

export default TaskForm;