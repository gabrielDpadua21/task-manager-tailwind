'use client'

import React from "react"
import Select from "./Select";


interface ListItemProps {
    value: string;
    isFinished: boolean
    changeStatus: () => void
}

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {

    const textStyle = props.isFinished ? 'line-through text-gray-300' : 'text-gray-500'

    return (
        <div onClick={props.changeStatus} className={`
           flex items-center bg-white text-black p-5 border-b border-gray-400 text-xl cursor-pointer rounded-xl
        `}>
            <Select value={props.isFinished}/>
            <span className={`ml-3 font-light ${textStyle}`}>
                {props.value}
            </span>
        </div>
    )
}

export default ListItem;