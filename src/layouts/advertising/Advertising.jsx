import Styles from "./Advertising.module.css";
import classname from "classname";

const Advertising = () => {
    return (
        <div className={Styles.advertising}>
            <div className="container">
                <div className={Styles.content}>
                    <p className={classname("text_color_white", Styles.p)}>Անվճար ՏՏ խորհրդատվություն</p>
                    <a target="_blank" className={classname("text_color_white", Styles.link)} href="https://amracode.com/free-it-consulting">Դիմել հիմա</a>

                </div>
            </div>
        </div>
    );
}

export default Advertising;