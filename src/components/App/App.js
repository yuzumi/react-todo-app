import React from 'react';
import Task from '../../models/task';
import Header from '../../containers/Header/Header';
import Main from '../../containers/Main/Main';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../../containers/TaskList/TaskList';
import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'React Todo App',
            tasks: []
        };
    }

    addTask = (name) => {
        const newTask = Task.of(name);

        this.setState(currentState => {
            return { 
                tasks: [ newTask, ...currentState.tasks ] 
            };
        });
    }

    removeTask = (id) => {
        this.setState(currentState => {
            return {
                tasks: currentState.tasks.filter(task => task.getProp('id') !== id)
            };
        });
    }

    completeTask = (id) => {
        this.setState(currentState => {
            const updatedTasks = currentState.tasks.map(task => {
                if (task.getProp('id') === id) {
                    const updatedTask = Object.assign({}, task, { 'completed': true });
                    Object.setPrototypeOf(updatedTask, Task.prototype);

                    return updatedTask;
                }
                return task;
            });

            return { tasks: updatedTasks };
        });
    }

    render() {
        const { title, tasks } = this.state;

        return (
            <div className="app">
                <Header title={title} />
                <Main>
                    <TaskForm addTask={this.addTask} />
                    <TaskList tasks={tasks} onComplete={this.completeTask} onRemove={this.removeTask} />
                </Main>
            </div>
        );
    }
}

export default App;