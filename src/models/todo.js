import hash from '../utils/hash';

class Todo {
    constructor(name) {
        this.id = hash.generateUnique();
        this.name = name;
        this.completed = false;
    }

    static of(name) {
        return new Todo(name);
    }
}

export default Todo;