import React from "react";

import Axlr from "../../hoc/Axlr";
import styles from "./Layout.css";

const layout = (props) => (
    <Axlr>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Axlr>
);

export default layout;