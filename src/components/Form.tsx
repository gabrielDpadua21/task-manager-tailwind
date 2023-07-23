import React from "react";
import List from "@/model/List"
import Task from "@/model/Task";
import { randomInt } from "crypto";

interface FormProps {
    tasks: List;
    changeTasks: (tasks: List) => void
}

const Form: React.FC<FormProps> = (props: FormProps) => {
    const [task, setTask] = React.useState("");

    const createTask = () => {
        props.changeTasks(props.tasks.addTask(new Task(getRandomId(), task, false)));
        setTask("");
    }

    const getRandomId = () => {
        return Math.floor(Math.random() * 1000);
    }

    return (
        <div className="w-full max-w-xl">
            <div className="flex flex-row">
                <div className="w-full">
                    <input type="text" className="w-full h-10 rounded-md focus:outline-none px-4 py-2" value={task} onChange={(e) => setTask(e.target.value)}/>
                </div>
                <div className="w-10 pl-2">
                    <button className="w-10 h-10 bg-indigo-500 text-white rounded-md hover:bg-pink-500" onClick={createTask}>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form;