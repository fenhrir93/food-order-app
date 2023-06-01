import Toolbar from "../../UI/Toolbar/Toolbar";
import Image from "../../assets/pics/foodbg.jpg";
import React from "react";
import styles from './Header.module.css';
import Banner from "../../UI/Baner/Banner";

const Header = () => {
    return <>
        <Toolbar/>
        <div className={styles['main-image']}>
            <img src={Image} alt=""/>
        </div>
    </>;
}

export default Header;