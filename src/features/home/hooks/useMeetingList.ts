import { useMeetingsStore } from "@/store/meetingStore";

export const useMeetingList = () => {
    const { meetings, removeMeeting } = useMeetingsStore();

    return {
        meetings,
        removeMeeting
    }
}