import React, { ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

export default function InputContent({ children }: IProps) {
    return <div className="w-full flex flex-col gap-2">
        {children}
    </div>;
}
