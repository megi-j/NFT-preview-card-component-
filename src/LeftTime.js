import clock from './images/icon-clock.svg'

export default function LeftTime(){
    let remainingDays = "3 days left";
    return(
        <div className="leftTimeBox">
            <img src={clock} alt="clock" />
            <p>{remainingDays}</p>
        </div>
    )
}