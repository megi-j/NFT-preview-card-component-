import styles from './Style.module.css'
import clock from './images/icon-clock.svg'

export default function LeftTime(){
    let remainingDays = "3 days left";
    return(
        <div className={styles.leftTimeBox}>
            <img src={clock} alt="icon.clock" />
            <p>{remainingDays}</p>
        </div>
    )
}