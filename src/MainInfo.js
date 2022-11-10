import styles from './Style.module.css'
import Image from './Image'
import { Title } from './Title'
import Text from './Text'
import MoreInfoBox from './MoreInfoBox'
import Line from './Line'
import CreatorBox from './CreatorBox'

export default function MainInfo(){
    return (
        <div className={styles.mainInfo}>
             <Image />
             <Title />
             <Text />
             <MoreInfoBox />
             <Line />
             <CreatorBox />
        </div>
    )
}