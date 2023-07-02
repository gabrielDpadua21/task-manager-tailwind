'use client'

import List from "@/model/List"
import React from "react"
import ListButton from "./ListButton"

interface ListFooterProps {
    tasks: List
    changeTasks: (tasks: List) => void
}

const ListFooter: React.FC<ListFooterProps> = (props: ListFooterProps) => {

    const { tasks, changeTasks } = props;

    const renderCount = () => {
        return (
            <>
                <span className={`text-gray-300 hidden md:inline`}>
                    {tasks.count}
                    {tasks.count > 1 ? ' Tasks' : ' Task'}
                </span>
                <span className="flex-1 hidden md:inline"></span>
            </>
        )
    }

    const renderFilters = () => {
        return (
            <>
                <ListButton select={tasks.showAll()} text="All" onClick={() => changeTasks(tasks.removeFilter())} className="hidden md:inline"/>
                <ListButton select={tasks.showActive()} text="Not Finished" onClick={() => changeTasks(tasks.filterNotFinished())} className="mx-4"/>
                <ListButton select={tasks.showFinished()} text="Finished" onClick={() => changeTasks(tasks.filterFinished())} />
            </>
        )
    }


    const renderDelete = () => {
        return (
            <>
                <span className="flex-grow hidden md:inline"></span>
                <ListButton className="hidden md:inline" text="Delete" onClick={() => changeTasks(tasks.deleteFinished())} />
            </>
        )
    }

    return (
        <li className={`flex p-5`}>
            {renderCount()}
            {renderFilters()}
            {renderDelete()}
        </li>
    )
}

export default ListFooter;