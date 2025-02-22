import dayjs from "dayjs";

export const dateConverter = (dateString: string): string => {
    return dayjs(dateString).format("YYYY-MM-DD");
};
