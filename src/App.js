import "./App.css";
import Signup from "./pages/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AddPost from "./pages/addPost";
import Login from "./pages/login";

import Profile from "./pages/profile";
import Navbar from "./components/navbar";
import Explore from "./pages/explore";
import { useSelector } from "react-redux";
import Protected from "./protectedRoute/protected";

const App = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  console.log(isLogin);
  return (
    <>
      <BrowserRouter>
        <div className={isLogin ? "sm:flex flex-row" : ""}>
          {isLogin && (
            <div className="sm:basis-1/4 basis-60">
              <Navbar />
            </div>
          )}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user" element={<Protected isLogin={isLogin} />}>
              <Route path="home" element={<Home />} />
              <Route path="addPost" element={<AddPost />} />
              <Route path="explore" element={<Explore />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
