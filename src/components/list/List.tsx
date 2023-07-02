'use client'

import List from "@/model/List"
import React from "react"
import ListItem from "./ListItem";
import ListButton from "./ListButton";
import ListFooter from "./ListFooter";


interface ListProps {
    tasks: List;
    changeTasks: (tasks: List) => void
}

const ListComponent: React.FC<ListProps> = (props: ListProps) => {

    const { tasks } = props;

    return (
        <div className={`
           flex w-3/5 items-start
        `}>
            <ul className={`w-full list-none bg-white shadow-lg rounded-xl`}>
                {tasks.itens.map((task) => (
                    <ListItem key={task.id} value={task.description} isFinished={task.status} changeStatus={() => {
                        const modifiedTask = task.toogleStatus();
                        const newTasks = tasks.toogleTask(modifiedTask);
                        props.changeTasks(newTasks);
                    }}/>
                ))}
                <ListFooter tasks={tasks} changeTasks={props.changeTasks}/>
            </ul>
        </div>
    )
}

export default ListComponent;