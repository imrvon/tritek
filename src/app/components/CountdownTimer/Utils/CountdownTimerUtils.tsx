import dayjs, { Dayjs } from "dayjs";

export function getRemainingTimeUntilMsTimeStamp(timestampMs: number) {
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();

    return {
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        hours: getRemainingHours(nowDayjs, timestampDayjs),
        days: getRemainingDays(nowDayjs, timestampDayjs),
    };
}

function getRemainingSeconds(nowDayjs: Dayjs, timestampDayjs: Dayjs): string {
    const seconds = timestampDayjs.diff(nowDayjs, "seconds") % 60;
    return padWithZeros(seconds, 2);
}

function getRemainingMinutes(nowDayjs: Dayjs, timestampDayjs: Dayjs): string {
    const minutes = timestampDayjs.diff(nowDayjs, "minutes") % 60;
    return padWithZeros(minutes, 2);
}

function getRemainingHours(nowDayjs: Dayjs, timestampDayjs: Dayjs): string {
    const hours = timestampDayjs.diff(nowDayjs, "hours") % 24;
    return padWithZeros(hours, 2);
}

function getRemainingDays(nowDayjs: Dayjs, timestampDayjs: Dayjs): string {
    const days = timestampDayjs.diff(nowDayjs, "days");
    return days.toString();
}

function padWithZeros(number: number, minLength: number): string {
    const numberString = number.toString();
    if (numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) + numberString;
}
