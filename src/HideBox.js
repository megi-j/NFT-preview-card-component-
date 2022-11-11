import view from "./images/icon-view.svg"
import styles from './Style.module.css'

export default function HideBox(){
    return(
        <div className={styles.hide}>
           <img src={view} alt="view" />
        </div>
    )
}