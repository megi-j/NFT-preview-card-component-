import styles from './Style.module.css'
import clock from './images/icon-clock.svg'

export default function LeftTime(){
    return(
        <div className={styles.leftTimeBox}>
            <img src={clock} alt="icon.clock" />
            <p>3 days left</p>
        </div>
    )
}