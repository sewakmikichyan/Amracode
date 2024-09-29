import Styles from "./Burger.module.css";

const Burger = ({ setActive }) => {
    return (
        <button className={Styles.burger} onClick={() => {
            setActive();
        }}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}

export default Burger;