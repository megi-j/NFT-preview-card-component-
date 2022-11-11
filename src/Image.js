import photo from './images/image-equilibrium.jpg'
import HideBox from './HideBox';

function Image(){
   return(
    <div className="imageBox">
      <img src={photo} alt="image-equilibrium" className= "equilibrium" />
      <HideBox />  
    </div>    
   )
}

export default Image;