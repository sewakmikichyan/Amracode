import Navbar from "../navbar/Navbar";
import Styles from "./MobileNavbar.module.css";

const MobileNavbar = () => {
    return (
        <div className={Styles["mobile-navbar"]}>
            <Navbar pt={25} />
        </div>
    );
}

export default MobileNavbar;