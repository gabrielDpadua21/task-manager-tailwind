export default class Task {
    private _id: number;
    private _description: string;
    private _status: boolean;

    constructor(id: number, description: string, status = false) {
        this._id = id
        this._description = description
        this._status = status
    }

    public static create(id: number, description: string) {
        return new Task(id, description)
    }

    public static createFinished(id: number, description: string) {
        return new Task(id, description, true)
    }

    public get id() {
        return this._id;
    }

    public get description() {
        return this._description;
    }

    public get status() {
        return this._status;
    }

    public toogleStatus() {
        return this.status ? this.active() : this.finished()
    }

    public finished() {
        return Task.createFinished(this._id, this._description)
    }

    public active() {
        return Task.create(this._id, this._description)
    }

    public isActive(): boolean {
        return !this._status;
    }

    public isFinished(): boolean {
        return this._status;
    }
 }