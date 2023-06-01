import React from "react";
import styles from './Cart.module.css';
import {MdShoppingCart} from 'react-icons/md';
import {IconContext} from "react-icons";

const Cart = (props) => {
    return <>
        <div className={styles.container}>
            <IconContext.Provider value={{size: 26, color: 'white'}}>
                <section className={styles.container}><span><MdShoppingCart/></span><span
                    className={styles['cart-title']}>Your cart</span>
                    <input type="button" className={styles['cart-items']} value={5}/>
                </section>
            </IconContext.Provider>
        </div>
    </>;
}

export default Cart;