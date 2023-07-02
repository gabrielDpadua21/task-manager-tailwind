'use client';

import React, { useState } from "react"
import Form from "./Form";
import mock from "@/data/mock";
import ListComponent from "./list/List";

const Header: React.FC = () => {

    const [tasks, setTasks] = useState(mock);

    return (
        <div className="h-1/3 w-screen">
            <div className="bg-img-tasks bg-cover h-full w-screen">
                <div  className="h-full w-screen bg-gradient-to-r from-purple-500 via-transparent to-pink-500">
                    <div className="flex justify-center items-center h-full w-full">
                        <Form />
                    </div>
                    <div className="h-full w-screen flex justify-center items-center">
                        <ListComponent tasks={tasks} changeTasks={(newTasks) => setTasks(newTasks)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;