import Styles from "./FadeAnimation.module.css";

const FadeAnimation = () => {
    return (
        <div className={Styles["animation-block"]}>
            <div className={Styles.animation}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default FadeAnimation;