import styles from './Style.module.css'
import PriceBox from './PriceBox'
import LeftTime from './LeftTime'

export default function MoreInfoBox(){
    return(
        <div className={styles.MoreInfoBox}>
            <PriceBox />
            <LeftTime />
        </div>
    )
}