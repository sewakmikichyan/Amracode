import HomeSection from "../../components/homeSection/HomeSection";
import Advertising from "../../layouts/advertising/Advertising";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";

const HomePage = () => {
    return (
        <div className="home_page">
            <Advertising />
            <Header />
            <HomeSection />
            <Footer />
        </div>
    );
};

export default HomePage;