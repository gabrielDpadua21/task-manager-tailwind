import React from "react"

interface SelectProps {
    value?: boolean
}

const Select: React.FC<SelectProps> = (props: SelectProps) => {

    const gradient = props.value ? "bg-gradient-to-br from-purple-500 to-pink-500" : ""

    return (
        <div className={`
            h-7
            w-7
            border
            border-gray-600
            rounded-full
            flex
            justify-center
            align-center
            text-white
            cursor-pointer
            ${gradient}
        `}>
            {props.value ? "✔" : ""}
        </div>
    )
}

export default Select;