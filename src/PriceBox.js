import styles from './Style.module.css'
import sign from './images/icon-ethereum.svg'

export default function PriceBox(){
    let price = "0.041 ETH"
    return(
        <div className={styles.priceBox}>
            <img src={sign} alt="icon-ethereum" />
            <p>{price}</p>
        </div>
    )
}