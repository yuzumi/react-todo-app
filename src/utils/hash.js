class Hash {
    constructor() {
        this.store = [];
    }

    static create() {
        return new Hash();
    }

    generate() {
        return Math.random().toString(32).slice(2, 9);
    }

    generateUnique() {
        const hash = this.generate();

        if (this.store.includes(hash)) this.generateUnique();

        this.store.push(hash);

        return hash;
    }
}

export default Hash.create();