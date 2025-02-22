"use client";
import { Button } from "@/components/ui/button";
import { useMeetingForm } from "../hooks/useMeetingForm";
import { Input } from "@/components/ui/input";
import InputContent from "@/components/InputContent";
import ErrorMessage from "@/components/ErrorMessage";
import DatePicker from "@/components/DatePicker";
import TimePicker from "@/components/TimePicker";
import { Plus } from "lucide-react";

export default function MeetingForm() {
    const { errors, handleSubmit, register, setValue, submitHandler, watch } = useMeetingForm();

    return (
        <div className="p-4 bg-white rounded-lg shadow my-8">
            <h2 className="text-lg font-semibold mb-4">Create a new meeting</h2>
            <form onSubmit={handleSubmit(submitHandler)} className="pb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <InputContent>
                    <Input {...register("title")} placeholder="Meeting title" />
                    {errors.title && <ErrorMessage error={errors.title.message as string} />}
                </InputContent>
                <InputContent>
                    <DatePicker
                        date={watch("date")}
                        field={"date"}
                        setValue={setValue}
                    />
                    {errors.date && <ErrorMessage error={errors.date.message as string} />}
                </InputContent>
                <InputContent>
                    <TimePicker field={"time"} setValue={setValue} time={watch("time")} />
                    {errors.time && <ErrorMessage error={errors.time.message as string} />}
                </InputContent>
                <Button type="submit">
                    Add
                    <Plus />
                </Button>
            </form>
        </div>
    );
}
