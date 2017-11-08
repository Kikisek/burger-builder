import React, {Component} from "react";

import Axlr from "../../hoc/Axlr/Axlr";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENTS_PRICES = {
    salad: 0.4,
    cheese: 0.6,
    meat: 1,
    bacon: 0.8
} 

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 5,
        canPurchase: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get("https://react-burger-builder-dc9fb.firebaseio.com/ingredients.json")
            .then(response => {
                this.setState({ingredients: response.data});
            })
            .catch(err => {
                this.setState({error: true});
            });
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(ingKey => {
                return ingredients[ingKey];
            })
            .reduce((sum, item) => {
                return sum + item;
            }, 0);
        this.setState({canPurchase: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceReduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);        
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Kiki",
                address: {
                    street: "Teststree 1",
                    zipcode: "A4X 2F8",
                    country: "Canada"
                },
                email: "kikismail@kiki.com"
            },
            deliveryMethod: "fastest"
        }
        axios.post("/orders.json", order)
            .then(response => {
                this.setState({loading: false, purchasing: false});
            })
            .catch(err => {
                this.setState({loading: false, purchasing: false});                
            });
    }

    render() {
        const disabledBtns = {
            ...this.state.ingredients
        };
        for (let key in disabledBtns) {
            disabledBtns[key] = disabledBtns[key] <= 0
        }
        let orderSummary = null;
        let burger = this.state.error ? <p style={{textAlign: "center"}}>No available ingredients!</p> : <Spinner />;
        if (this.state.ingredients) {
            burger = (
                <Axlr>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        addIngredient={this.addIngredientHandler}
                        removeIngredient={this.removeIngredientHandler}
                        disabled={disabledBtns}
                        purchasable={this.state.canPurchase}
                        price={this.state.totalPrice}
                        ordered={this.purchaseHandler} />
                </Axlr>
            );
            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCancellation={this.purchaseCancelHandler}
                purchaseProceed={this.purchaseContinueHandler} />;
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        
        return (
            <Axlr>
                <Modal display={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Axlr>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);