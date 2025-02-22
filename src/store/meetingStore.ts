import { create } from "zustand";

interface Meeting {
    id: string;
    title: string;
    date: string;
    time: string;
}

interface MeetingsStore {
    meetings: Meeting[];
    addMeeting: (meeting: Meeting) => void;
    removeMeeting: (id: string) => void;
}

export const useMeetingsStore = create<MeetingsStore>((set) => ({
    meetings: [],
    addMeeting: (meeting) =>
        set((state) => ({ meetings: [...state.meetings, meeting] })),
    removeMeeting: (id) =>
        set((state) => ({
            meetings: state.meetings.filter((meeting) => meeting.id !== id),
        })),
}));
