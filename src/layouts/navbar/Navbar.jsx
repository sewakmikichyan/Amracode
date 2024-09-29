import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Navbar.module.css";
import classname from "classname";

const Navbar = ({ pt }) => {
    const navigate = useNavigate("/");

    const data = [
        {
            key: "servicesLink",
            content: "Our Services",
            path: "/services"
        },
        {
            key: "aboutLink",
            content: "About Us",
            path: "/about"
        },
        {
            key: "clientsLink",
            content: "Client of Amracode",
            path: "/clients"
        }
    ];

    return (
        <ul className={Styles.navbar} style={{paddingTop: pt + "px"}}>
            {
                data.map(({ content, path, key }, i) => {
                    return (
                        <li className={Styles["navbar-item"]} key={key}>
                            <span className={classname("span", "text_color_black", Styles["navbar-link"])}
                                onClick={() => navigate(path)}>{content}</span>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default Navbar;