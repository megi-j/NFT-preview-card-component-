import styles from './Style.module.css'
import photo from './images/image-equilibrium.jpg'

function Image(){
   return(
     <img src={photo} alt="image-equilibrium" className= {styles.equilibrium} />
   )
}

export default Image;