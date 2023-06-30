import Filters from "./Filters"
import Task from "./Task"

export default class List {

    private _all: Task[];
    private _filter: Filters;

    constructor(all: Task[], filter = Filters.NONE) {
        this._all = all;
        this._filter = filter;
    }

    public get itens(): Task[] {
        return this._applyFilters(this._all);
    }

    public get count(): number {
        return this.itens.length;
    }

    public get filter(): Filters {
        return this._filter;
    }

    public showAll(): boolean {
        return this._filter === Filters.NONE;
    }

    public showActive(): boolean {
        return this._filter === Filters.ACTIVE;
    }

    public showFinished(): boolean {
        return this._filter === Filters.FINISH;
    }

    private _applyFilters(tasks: Task[]): Task[] {
        if (this.showActive()) return this._applyActiveFilter(tasks);
        if (this.showFinished()) return this._applyFinishedFilter(tasks);
        return tasks
    }

    private _applyActiveFilter(tasks: Task[]): Task[] {
        return tasks.filter(task => task.isActive());
    }

    private _applyFinishedFilter(tasks: Task[]): Task[] {
        return tasks.filter(task => task.isFinished())
    }

}