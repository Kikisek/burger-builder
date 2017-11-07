import React from "react";

import styles from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import ShowSideDrawer from "../SideDrawer/ShowSideDrawer/ShowSideDrawer";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <ShowSideDrawer clicked={props.openSideDrawer} />
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;