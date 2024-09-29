import Styles from "./Button.module.css";

const Button = ({ content }) => {
    return (
        <button className={Styles.btn}>{content}</button>
    );
};

export default Button;