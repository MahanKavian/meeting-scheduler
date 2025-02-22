import { z } from "zod";

export const meetingSchema = z.object({
    title: z.string().min(3, "The title must be at least 3 characters."),
    date: z.date({
        required_error: "Date is required."
    }),
    time: z.string({
        required_error: "Time is required."
    }).nonempty("Time is required.")
});

export type TAddMeeting = z.infer<typeof meetingSchema>