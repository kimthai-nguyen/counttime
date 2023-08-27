import React, {useState, useEffect} from 'react'

export default function CountTime() {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive){
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            },10);
        }else if(!isActive && time !== 0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[isActive, time]);
    const clickStarStop = () => {
        setIsActive(!isActive);
    };
    const clickReset = () => {
        setTime(0);
        setIsActive(false);
    };

    const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
    };
  return (
    <div className = "counttime">
        <h1>Đếm thời gian: </h1>
        <div className="time">{formatTime(time)}</div>
        <div className = "button">
            <button className="start_stop" onClick={clickStarStop}>
                {isActive ? 'Stop' : 'Start'}
            </button>
            <button className="reset" onClick={clickReset}>Reset</button>
        </div>
    </div>
  )
}
