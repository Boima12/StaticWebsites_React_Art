import styles from './about.module.css';

import Boima from '~/src/assets/images/Boima.jpg';


function Co_about() {

    return(
        <div className={styles.main_about}>

            <h3>About</h3>

            <img src={Boima}></img>

            <p>Just me, myself and I, exploring the universe of unknownment. I have a  heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut  rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies  congue gravida diam non fringilla. Praesent tincidunt sed tellus ut  rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies  congue gravida diam non fringilla.</p>
            <p>Do not hesitate to contact me!</p>

            <form>
                <div className={styles.simple_input}>
                    <label>Name</label>
                    <input type="text"></input>
                </div>

                <div className={styles.simple_input}>
                    <label>Email</label>
                    <input type="text"></input>
                </div>

                <div className={styles.simple_input}>
                    <label>Message</label>
                    <input type="text"></input>
                </div>

                <button type="button">Send</button>
            </form>

        </div>
    );
}


export default Co_about