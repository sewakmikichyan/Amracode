import Styles from "./Footer.module.css";
import instagram from "../../assets/images/svg/Instagram.svg";
import facebook from "../../assets/images/svg/Facebook.svg";
import linkedin from "../../assets/images/svg/Linkedin.svg";
import Cookie from "../../assets/images/svg/Cookie.svg";

const Footer = () => {
    const createData = (link, src, alt) => {
        return {
            link: link,
            src: src,
            alt: alt,
            key: alt
        };
    };

    const datas = [
        createData("https://www.instagram.com/amracode/", instagram, "INSTAGRAM"),
        createData("https://www.facebook.com/amracode", facebook, "FACEBOOK"),
        createData("#", linkedin, "LINKERID")
    ];

    return (
        <footer className={Styles.footer}>
            <div className="container">
                <div className={Styles.footer__content}>
                    <div className={Styles["media-block"]}>
                        {
                            datas.map(({ link, src, alt, key }) => {
                                return <a target="_blank" href={link} className={Styles.media__link} key={key}>
                                    <img src={src} alt={alt} className={Styles.media__img} />
                                </a>
                            })
                        }
                    </div>
                    <div className={Styles["cookies-block"]}>
                        <span className="span">Privacy Policy</span>
                        <button className={Styles.cookie__btn}>
                            <img src={Cookie} alt="COOKIE" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;