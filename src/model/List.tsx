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

    public addTask(newTask: Task): List {
        const tasks = [...this._all];
        tasks.push(newTask);
        return new List(tasks, Filters.NONE);
    }

    public toogleTask(newTask: Task): List {
        const tasks = this._all.map(task => {
            return task.id == newTask.id ? newTask : task
        })
        return new List(tasks, this.filter);
    }

    public deleteFinished(): List {
        const onlyNotFinished = this._all.filter(task => task.active)
        return new List(onlyNotFinished, Filters.NONE);
    }

    public filterNotFinished(): List {
        if (!this.showActive()) return new List(this._all, Filters.ACTIVE);
        return this;
    }

    public filterFinished(): List {
        if (!this.showFinished()) return new List(this._all, Filters.FINISH);
        return this;
    }

    public removeFilter(): List {
        if (!this.showAll()) return new List(this._all, Filters.NONE);
        return this;
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