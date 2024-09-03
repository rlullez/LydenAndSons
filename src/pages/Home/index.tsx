import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.apresentacao}>
            <p>
                Hello, We are <br/>
                <span>Lyden & Sons</span> <br/>
                Office Fit-Out & <br/>
                Property Maintenance
            </p>
            <Link to="/about" className={`${styles.btn} ${styles.btn_red}`}>
                More about us
            </Link>
            </div>
            <figure>
            <img className={styles.img_home} src="/developer-red.svg" alt="Imagem de Home" />
            </figure>
        </section>
    )
}

export default Home
