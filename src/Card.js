import styles from './Style.module.css'
import MainInfo from './MainInfo'

export default function Card(){
    return(
        <div className={styles.card}>
           <MainInfo />  
        </div>
    )
}