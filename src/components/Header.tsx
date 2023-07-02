'use client';

import React from "react"
import Form from "./Form";
import ListItem from "./list/ListItem";

const Header: React.FC = () => {
    return (
        <div className="h-1/3 w-screen">
            <div className="bg-image h-full w-screen">
                <div  className="h-full w-screen bg-gradient-to-r from-purple-500 via-transparent to-pink-500">
                    <div className="flex justify-center items-center h-full w-full">
                        <Form />
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <ListItem value="Study #1" isFinished={false} changeStatus={() => { }}/>
                        <ListItem value="Study #2" isFinished={true} changeStatus={() => { }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;