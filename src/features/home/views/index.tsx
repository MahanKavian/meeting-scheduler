import { container } from "@/utils/contentSizing";
import React from "react";
import MeetingList from "./MeetingsList";
import MeetingForm from "./MeetingForm";

export default function index() {
    return <div className={`${container} flex flex-col gap-5 mt-5`}>
        <h1 className="w-full text-center text-xl md:text-2xl lg:text-3xl">
            Meeting Scheduler
        </h1>
        <MeetingList />
        <MeetingForm />
    </div>;
}
