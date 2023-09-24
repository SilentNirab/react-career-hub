import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;