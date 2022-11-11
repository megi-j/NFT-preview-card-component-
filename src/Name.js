import styles from './Style.module.css'

export function Name(){
    let name = "Equilibrium #3429"
    return (
        <h3 className={styles.name}>{name}</h3>
    )
}