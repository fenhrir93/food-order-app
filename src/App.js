import React from "react";
import Header from "./components/Header/Header";
import Banner from "./UI/Baner/Banner";
import styles from './App.module.css'

function App() {
    return (
        <React.Fragment>
            <Header/>
            <section className={styles.banner}>
                <Banner/>
            </section>
        </React.Fragment>
    );
}

export default App;
