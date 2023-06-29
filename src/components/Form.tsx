import React from "react";

const Form: React.FC = () => {
    return (
        <div className="w-full max-w-xl">
            <div className="flex flex-row">
                <div className="w-full">
                    <input type="text" className="w-full h-10 rounded-md focus:outline-none px-4 py-2"/>
                </div>
                <div className="w-10 pl-2">
                    <button className="w-10 h-10 bg-indigo-500 text-white rounded-md">
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form;