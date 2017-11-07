import React from "react";

import styles from "./ShowSideDrawer.css";

const showSideDrawer = (props) => (
    <div className={styles.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default showSideDrawer;