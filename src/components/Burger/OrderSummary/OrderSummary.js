import React from "react";

import Axlr from "../../../hoc/Axlr";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => {
            return (
                <li key={ingKey}>
                    <span style={{textTransform: "capitalize"}}>{ingKey}</span>: {props.ingredients[ingKey]}
                </li>);
        });
    return (
        <Axlr>
            <h3>Your Order</h3>
            <p>A burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Axlr>
    )
};

export default orderSummary;