import styles from './Style.module.css'

export default function Text(){
  let text = "Our Equilibrium collection promotes balance and calm."
    return(
      <p className={styles.text}>{text}</p>
    )
}