import styles from './photos.module.css';

import streetart1 from '~/src/assets/images/streetart1.jpg';
import streetart2 from '~/src/assets/images/streetart2.jpg';
import streetart3 from '~/src/assets/images/streetart3.jpg';
import streetart4 from '~/src/assets/images/streetart4.jpg';
import streetart5 from '~/src/assets/images/streetart5.jpg';


function Co_photos() {

    return(
        <div className={styles.main_photos}>

            <div className={styles.photo_left}>
                <img src={streetart1}></img>
                <img src={streetart2}></img>
                <img src={streetart3}></img>
            </div>

            <div className={styles.photo_right}>
                <img src={streetart4}></img>
                <img src={streetart5}></img>
            </div>

        </div>
    );
}


export default Co_photos