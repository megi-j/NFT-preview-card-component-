import styles from './Style.module.css'
import photo from './images/image-equilibrium.jpg'
import HideBox from './HideBox';

function Image(){
   return(
    <div className={styles.imageBox}>
      <img src={photo} alt="image-equilibrium" className= {styles.equilibrium} />
      <HideBox />  
    </div>    
   )
}

export default Image;