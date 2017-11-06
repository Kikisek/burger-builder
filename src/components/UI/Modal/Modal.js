import React from "react";

import styles from "./Modal.css";

const modal = (props) => (
    <div 
        className={styles.Modal}
        style={{
            transform: props.display ? "translateY(0)" : "translateY(100vh)",
            opacity: props.display ? "1" : "0"
        }}>
        {props.children}
    </div>
);

export default modal;