import React from "react";

import styles from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Cheese", type: "cheese"},
    {label: "Bacon", type: "bacon"},
    {label: "Meat", type: "meat"}
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        {controls.map(item => (
            <BuildControl 
                key={item.label}
                label={item.label}
                add={() => props.addIngredient(item.type)}
                remove={() => props.removeIngredient(item.type)}
                disabled={props.disabled[item.type]} />
        ))}
    </div>
);

export default buildControls;