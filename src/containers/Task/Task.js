import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Task.scss';

const Task = ({ task, onComplete = f => f, onRemove = f => f }) => (
    <article className="task">
        <section className="task__content">
            <h3 className={`task__name ${task.getProp('completed') ? 'completed' : ''}`}>Name: { task.getProp('name') }</h3>
            <p className="task__status">Status: { task.getProp('completed') ? 'completed' : 'in process' }</p>
        </section>
        <section className="task__control">
            <Button name="Remove" classNames={['button--small']} type="button" handleClick={() => onRemove(task.getProp('id'))} />
            {task.getProp('completed') ? 
                null :
                <Button name="Complete" classNames={['button--small']} type="button" handleClick={() => onComplete(task.getProp('id'))} />
            }
        </section>
    </article>
);

Task.propTypes = {
    task: PropTypes.object.isRequired,
    onComplete: PropTypes.func,
    onRemove: PropTypes.func,
};

export default Task;