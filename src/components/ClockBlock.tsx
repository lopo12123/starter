import {useEffect, useRef, useState} from "react";

const DAYS: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const getDay = (): string => {
    const day: number = new Date().getDay();

    return DAYS[day];
}

const getCurrentTime = (): string => {
    const date: Date = new Date();
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();
    const second: number = date.getSeconds();

    let time: string = '';
    time += hours;
    time += ' : ';
    time += minutes < 10 ? '0' + minutes : minutes;
    time += ' : ';
    time += second < 10 ? '0' + second : second;

    return time;
}

const ClockBlock = () => {
    const rafId = useRef(-1)

    const [day, setDay] = useState(getDay())
    const [time, setTime] = useState(getCurrentTime())

    const rafTick = (t: DOMHighResTimeStamp) => {
        setDay(getDay())
        setTime(getCurrentTime())
        rafId.current = requestAnimationFrame(rafTick)
    }

    useEffect(() => {
        rafId.current = requestAnimationFrame(rafTick)

        return () => cancelAnimationFrame(rafId.current)
    }, [])

    return (
        <div style={{
            width: '100%',
            fontSize: 64,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{fontFamily: 'monospace'}}>{day}</div>
            <div style={{fontFamily: 'LED'}}>{time}</div>
        </div>
    )
}

export {
    ClockBlock
}