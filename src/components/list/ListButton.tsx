import React from "react"

interface ListButtonProps {
    select?: boolean;
    className?: string;
    text: string;
    onClick: (event: any) => void;
}

const ListButton: React.FC<ListButtonProps> = (props: ListButtonProps) => {

    const border = props.select ? "border-b-4 border-pink-400" : ""

    return (
        <button onClick={props.onClick} className={`
            text-gray-500
            font-semibold
            hover:text-black
            focus:outline-none
            ${border}
            ${props.className}
        `}>
            {props.text}
        </button>
    )
}

export default ListButton;