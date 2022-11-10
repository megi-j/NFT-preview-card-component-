import styles from './Style.module.css'
import avatar from './images/image-avatar.png'


export default function CreatorBox(){
    return(
        <div className={styles.creatorBox}>
            <div className={styles.avatar}>
               <img src={avatar} alt="image-avatar"/>
            </div>
             <p>Creation of<span>Jules Wyvern</span></p>
        </div>
    )
}