import React from "react";

import styles from "./Modal.css";
import Axlr from "../../../hoc/Axlr";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
    <Axlr>
        <Backdrop display={props.display} clicked={props.modalClosed} />
        <div 
            className={styles.Modal}
            style={{
                transform: props.display ? "translateY(0)" : "translateY(100vh)",
                opacity: props.display ? "1" : "0"
            }}>
            {props.children}
        </div>
    </Axlr>
);

export default modal;