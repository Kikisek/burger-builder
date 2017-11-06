import React from "react";

import styles from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + i} type={ingKey}/>
            });
        })
        .reduce((arr, element) => {
            return arr.concat(element)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Add ingredients to your burger!</p>
    }
    console.log(transformedIngredients);
    return(
        <div className={styles.Burger}>
            <BurgerIngredient type="bun-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bun-bottom"/>
        </div>
    );
};

export default burger;