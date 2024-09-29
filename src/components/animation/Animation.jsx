import Styles from "./Animation.module.css";
import classname from "classname";

const Animation = ({ size, color, speed }) => {

    const circleStyles = {
        width: size + "px",
        height: size + "px",
        background: color,
        animationDuration: speed + "s"
    };

    return (
        <div className={Styles["circle-block"]}>
            <div className={Styles.circle}
                style={circleStyles}></div>
        </div>
    );
}

export default Animation;