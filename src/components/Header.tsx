import React from "react"
import Form from "./Form";

const Header: React.FC = () => {
    return (
        <div className="h-1/3 w-screen">
            <div className="bg-image h-full w-screen">
                <div  className="h-full w-screen bg-gradient-to-r from-purple-500 via-transparent to-pink-500">
                    <div className="flex justify-center items-center h-full w-full">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;