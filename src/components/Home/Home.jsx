import Banner from "../Banner/Banner";
import Catagorylist from "../Catagorylist/Catagorylist";
import Featuredjobs from "../Featuredjobs/Featuredjobs";


const Home = () => {
    return (
        <div className="text-center">
            <div className="max-w-6xl mx-auto">
                <Banner></Banner>
                <Catagorylist></Catagorylist>
                <Featuredjobs></Featuredjobs>
            </div>
            
        </div>
    );
};

export default Home;