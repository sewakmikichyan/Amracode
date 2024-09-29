import classname from "classname";
import Styles from "./HomeSection.module.css";
import Button from "../basic/button/Button";
import Animation from "../animation/Animation";
import FadeAnimation from "../fadeAnimation/FadeAnimation";

const HomeSection = () => {
    return (
        <section className={Styles.section}>
            <Animation size={1600} color="var(--white)" speed="5"/>
            <Animation size={1250} color="var(--gray)" speed="7" />
            <Animation size={900} color="var(--white)" speed="6"/>
            <Animation size={550} color="var(--white)" speed="5"/>
            <FadeAnimation />
            <div className="container">
                <div className={Styles.section__content}>
                    <h1 className={classname("h1", Styles.main_title)}>
                        <span className="h1_size_l text_color_black">strngth</span>
                        <span className="h1_size_s text_color_black">in code,</span>
                        <span className="h1_size_l text_color_red">stability</span>
                        <span className="h1_size_s text_color_black">in succes</span>
                    </h1>
                    <Button content="Request a call" />
                </div>
            </div>
        </section>
    );
}

export default HomeSection;