import React, {Component} from "react";

import Axlr from "../../hoc/Axlr";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return (
            <Axlr>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Axlr>
        );
    }
}

export default BurgerBuilder;