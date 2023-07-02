'use client';

import React, { useState } from "react"

interface TemplateHeaderProps {
    children: React.ReactNode
}


const TemplateHeader: React.FC<TemplateHeaderProps> = (props: TemplateHeaderProps) => {
    return (
        <div className={`flex h-1/3 bg-img-tasks bg-no-repeat bg-cover`}>
            <div className={`
                h-full
                flex
                flex-1
                justify-center
                items-center
                bg-gradient-to-r from-purple-500 via-transparent to-pink-500
            `}>
                {props.children}
            </div>
        </div>
    )
}

export default TemplateHeader;