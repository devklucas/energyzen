import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Search from "./pages/Search";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";

const ByRoute = () => {

return(
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
)
}

export default ByRoute