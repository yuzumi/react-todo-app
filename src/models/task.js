import hash from '../utils/hash';

class Task {
    constructor(name) {
        this.id = hash.generateUnique();
        this.name = name;
        this.completed = false;
    }

    static of(name) {
        return new Task(name);
    }

    getProp(name) {
        return this[name];
    }

    setProp(name, value) {
        this[name] = value;

        return this;
    }

    getInstance() {
        return this;
    }
}

export default Task;