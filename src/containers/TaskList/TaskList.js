import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

const TaskList = ({ tasks = [], onComplete = f => f, onRemove = f => f }) => (
    <div className="task-list">
        {tasks && tasks.map(task => (
            <Task key={task.getProp('id')} task={task} onComplete={onComplete} onRemove={onRemove} />
        ))}
    </div>
);

TaskList.propTypes = {
    task: PropTypes.array,
    onComplete: PropTypes.func,
    onRemove: PropTypes.func
};

export default TaskList;