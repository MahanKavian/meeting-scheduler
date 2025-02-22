import React from "react";

interface IProps {
    title: string;
    text: string;
}

export default function MeetingListItemField({ text, title }: IProps) {
    return <div className="w-full flex items-center gap-2">
        <span className="text-sm font-medium text-gray-500">{title} :</span>
        <span className="text-sm font-medium text-blue-700">{text}</span>
    </div>;
}
