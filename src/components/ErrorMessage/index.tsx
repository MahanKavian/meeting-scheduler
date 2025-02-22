import React from "react";

interface IProps {
    error: string;
}

export default function ErrorMessage({ error }: IProps) {
    return <p className="text-sm text-red-500">
        {error}
    </p>;
}
