import React, {Component} from "react";

import styles from "./Modal.css";
import Axlr from "../../../hoc/Axlr";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.display !== this.props.display;
    }

    componentWillUpdate() {
        console.log("[Modal] WillUpdate");
    }

    render() {
        return (
            <Axlr>
                <Backdrop display={this.props.display} clicked={this.props.modalClosed} />
                <div 
                    className={styles.Modal}
                    style={{
                        transform: this.props.display ? "translateY(0)" : "translateY(100vh)",
                        opacity: this.props.display ? "1" : "0"
                    }}>
                    {this.props.children}
                </div>
            </Axlr>
        )
    }
}

export default Modal;