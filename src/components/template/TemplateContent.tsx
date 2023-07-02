'use client';

import React, { useState } from "react"

interface TemplateContentProps {
    children: React.ReactNode
}


const TemplateContent: React.FC<TemplateContentProps> = (props: TemplateContentProps) => {
    return (
        <div className={`flex flex-1 justify-center`}>
            {props.children}
        </div>
    )
}

export default TemplateContent;