import React from "react";

import Axlr from "../../hoc/Axlr";
import styles from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => (
    <Axlr>
        <Toolbar />
        <main className={styles.Content}>
            {props.children}
        </main>
    </Axlr>
);

export default layout;