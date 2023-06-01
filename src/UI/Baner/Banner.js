import React from "react";
import styles from './Banner.module.css';

const Banner = () => {
    return (<div className={styles.container}>
        <section className={styles.title}><h1>Delicious Food, Delivered To You</h1></section>
        <section className={styles.content}>Choose your favorite food from our broad selection of available meals and
            enjoy
            a delicious lunch or dinner at home
        </section>
        <section className={styles.content}>All our meals are cooked with high-quality ingredients, just-in-time and of
            course by
            experienced chef
        </section>
    </div>)
}

export default Banner;