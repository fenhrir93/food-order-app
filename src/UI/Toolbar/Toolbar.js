import styles from './Toolbar.module.css';
import Cart from "../../components/Header/Cart/Cart";
const Toolbar = () => {

    return (
        <div className={styles.container}>

            <section className={styles.content}><span className={styles.logo}>ReactMeals</span>
                <Cart/></section>
        </div>
    )
}

export default Toolbar;