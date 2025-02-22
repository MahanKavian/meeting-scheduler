import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ClockIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { UseFormSetValue } from "react-hook-form";

interface IProps {
    time: string;
    setValue: UseFormSetValue<any>;
    field: string;
}

const timeOptions = Array.from({ length: 24 * 2 }, (_, i) => {
    const hours = Math.floor(i / 2);
    const minutes = i % 2 === 0 ? "00" : "30";
    return `${String(hours).padStart(2, "0")}:${minutes}`;
});

export default function TimePicker({ setValue, time, field }: IProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {/* <Button variant="outline" className="w-[150px]">{selectedTime}</Button> */}
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !time && "text-muted-foreground"
                    )}
                >
                    <ClockIcon />
                    {time ? time : "Select Time"}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[150px] p-0" align="start">
                <ScrollArea className="h-[200px]">
                    <div className="p-2 space-y-1">
                        {timeOptions.map((time) => (
                            <Button
                                key={time}
                                variant="ghost"
                                className="w-full justify-start"
                                onClick={() => setValue(field, time, { shouldValidate: true })}
                            >
                                {time}
                            </Button>
                        ))}
                    </div>
                </ScrollArea>
            </PopoverContent>
        </Popover>
    );
}
