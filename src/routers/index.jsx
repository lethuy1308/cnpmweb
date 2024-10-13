import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Allshop, Home } from "../pages";


const Routers = () => {
    return (
       <>
       <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allshop" element={<Allshop />} />
            </Routes>
       </Router>
       </>
    );
};
export default Routers;