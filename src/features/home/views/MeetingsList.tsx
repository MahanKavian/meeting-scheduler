"use client";
import { Button } from "@/components/ui/button";
import { useMeetingList } from "../hooks/useMeetingList";
import { dateConverter } from "@/utils/dateConverter";
import { Trash2 } from "lucide-react";
import MeetingListItemField from "./MeetingListItemField";


export default function MeetingList() {
    const { meetings, removeMeeting } = useMeetingList();

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Meeting list</h2>
            {meetings.length === 0 ? (
                <p className="text-gray-500">No meetings have been recorded.</p>
            ) : (
                <ul className="space-y-2">
                    {meetings.map((meeting) => (
                        <li
                            key={meeting.id.toString()}
                            className="p-3 border rounded-md shadow flex justify-between items-start"
                        >
                            <div className="flex flex-col gap-3">
                                <span className="text-lg font-semibold">{meeting.title}</span>
                                <MeetingListItemField
                                    text={dateConverter(meeting.date)}
                                    title="Date"
                                />
                                <MeetingListItemField
                                    text={meeting.time}
                                    title="Time"
                                />
                            </div>
                            <Button onClick={() => removeMeeting(meeting.id)}>
                                <Trash2 />
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
