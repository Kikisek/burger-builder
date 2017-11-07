import React from "react";

import Axlr from "../../../hoc/Axlr";
import Button from "../../UI/Button/Button";

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
            <p>Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Price: </strong>${props.price.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseProceed} btnType="Success">CONTINUE</Button>
            <Button clicked={props.purchaseCancellation} btnType="Danger">CANCEL</Button>
        </Axlr>
    )
};

export default orderSummary;