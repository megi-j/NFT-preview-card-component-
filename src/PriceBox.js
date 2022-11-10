import styles from './Style.module.css'
import sign from './images/icon-ethereum.svg'

export default function PriceBox(){
    return(
        <div className={styles.priceBox}>
            <img src={sign} alt="icon-ethereum" />
            <p>0.041 ETH</p>
        </div>
    )
}