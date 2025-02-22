import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { UseFormSetValue } from "react-hook-form";

interface IProps {
    date: Date;
    setValue: UseFormSetValue<any>;
    field: string;
}

export default function DatePicker({ date, setValue, field }: IProps) {
    return <Popover>
        <PopoverTrigger asChild>
            <Button
                variant={"outline"}
                className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                )}
            >
                <CalendarIcon />
                {date ? format(date, "PPP") : <span>Specify the meeting date</span>}
            </Button>
        </PopoverTrigger>
        <PopoverContent align="start">
            <Calendar
                mode="single"
                className="bg-white shadow border rounded-md"
                selected={date}
                onSelect={(date: any) => {
                    setValue(field, date, { shouldValidate: true })
                }}
                initialFocus
            />
        </PopoverContent>
    </Popover>
}
