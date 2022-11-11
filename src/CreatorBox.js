import avatar from './images/image-avatar.png'


export default function CreatorBox(){
    return(
        <div className="creatorBox">
            <div className="avatar">
               <img src={avatar} alt="avatar"/>
            </div>
             <p>Creation of<span>Jules Wyvern</span></p>
        </div>
    )
}