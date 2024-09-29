import Styles from "./Header.module.css";
import classname from "classname";

import Navbar from "../navbar/Navbar";
import Logo from "../../components/basic/logo/Logo";
import Burger from "../burger/Burger";
import MobileNavbar from "../mobileNavbar/MobileNavbar";
import { useState } from "react";

const Header = () => {
    const [active, setActive] = useState("");

    return (
        <header className={classname(Styles.header, active)}>
            <div className="container">
                <nav className={Styles.nav}>
                    <div className={Styles.main}>
                        <a href="/">
                            <Logo />
                        </a>
                        <Navbar />
                        <Burger setActive={() => {
                            setActive("active");
                        }}/>
                    </div>
                    <MobileNavbar />
                </nav>
            </div>
        </header>
    );
}

export default Header;