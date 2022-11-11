import styles from './Style.module.css'
import Image from './Image'
import { Name } from './Name'
import Text from './Text'
import MoreInfoBox from './MoreInfoBox'
import Line from './Line'
import CreatorBox from './CreatorBox'

export default function MainInfo(){
    return (
        <div className={styles.mainInfo}>
             <Image />
             <Name />
             <Text />
             <MoreInfoBox />
             <Line />
             <CreatorBox />
        </div>
    )
}