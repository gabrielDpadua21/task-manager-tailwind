'use client'

import List from "@/model/List"
import React from "react"
import ListItem from "./ListItem";


interface ListProps {
    tasks: List;
    changeTasks: (tasks: List) => void
}

const ListComponent: React.FC<ListProps> = (props: ListProps) => {

    const { tasks } = props;

    return (
        <div className={`
           flex w-3/5 justify-center items-center
        `}>
            <ul className={`w-full list-none bg-white shadow-lg rounded-xl`}>
                {tasks.itens.map((task) => (
                    <ListItem key={task.id} value={task.description} isFinished={task.status} changeStatus={() => {
                        const modifiedTask = task.toogleStatus();
                        const newTasks = tasks.toogleTask(modifiedTask);
                        props.changeTasks(newTasks);
                    }}/>
                ))}
            </ul>
        </div>
    )
}

export default ListComponent;