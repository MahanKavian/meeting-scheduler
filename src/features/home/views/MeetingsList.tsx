"use client";
import { Button } from "@/components/ui/button";
import { useMeetingList } from "../hooks/useMeetingList";
import { dateConverter } from "@/utils/dateConverter";
import { DeleteIcon, LucideRecycle, RecycleIcon, Trash2 } from "lucide-react";


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
                                <div className="w-full flex items-center gap-2">
                                    <span className="text-sm font-medium text-gray-500">Date :</span>
                                    <span className="text-sm font-medium text-blue-700">{dateConverter(meeting.date)}</span>
                                </div>
                                <div className="w-full flex items-center gap-2">
                                    <span className="text-sm font-medium text-gray-500">Time :</span>
                                    <span className="text-sm font-medium text-blue-700">{meeting.time}</span>
                                </div>
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
