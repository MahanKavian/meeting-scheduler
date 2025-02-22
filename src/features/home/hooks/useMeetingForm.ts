import { useMeetingsStore } from "@/store/meetingStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { meetingSchema, TAddMeeting } from "../interface/schema";


export const useMeetingForm = () => {
    const { addMeeting } = useMeetingsStore();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset
    } = useForm<TAddMeeting>({
        resolver: zodResolver(meetingSchema),
    });

    const submitHandler = (data: any) => {
        addMeeting({ id: Math.floor(10000000 * Math.random()), ...data });
        reset();
    };

    return {
        register,
        handleSubmit,
        setValue,
        errors,
        submitHandler,
        watch
    }
}