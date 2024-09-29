import Styles from "./Logo.module.css";
import logo from "../../../assets/images/svg/Logo.svg";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate("/");

    return (
        <img className={Styles.logo} src={logo} alt="AMRACODE LOGO" onClick={() => {
            navigate("/");
        }} />
    );
}

export default Logo;