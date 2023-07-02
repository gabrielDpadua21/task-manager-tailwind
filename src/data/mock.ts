import List from "@/model/List";
import Task from "../model/Task"
import Filters from "@/model/Filters";

const InitialTasks: Task[] = [
    Task.create(1, "Study"),
    Task.create(2, "Work"),
    Task.createFinished(3, "Read")
];

export default new List(InitialTasks, Filters.NONE);