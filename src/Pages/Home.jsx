import Accordion from "../Components/Home/Accordion";
import Banner from "../Components/Home/Banner";
import FeaturdProducts from "../Components/Home/FeaturdProducts";
import UserReview from "../Components/Home/UserReview";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
                <div className="my-24 ">
                    <FeaturdProducts></FeaturdProducts>
                </div>
                <div className="my-24 ">
                    <UserReview></UserReview>
                </div>
                <div className="my-24 ">
                    <Accordion></Accordion>
                </div>
            </div>
        </div>
    );
};

export default Home;