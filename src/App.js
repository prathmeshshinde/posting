import "./App.css";
import Header from "./components/Header";
import Option from "./components/Option";
import Feed from "./components/Feed";
import People from "./components/People";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Bookmark from "./components/Bookmark";
import Profile from "./components/Profile";
import Explore from "./components/Explore";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { UserAPIProvider } from "./context/UserAPI";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <div className="flex justify-center">
          {/* <Feed /> */}
          {/* <Option /> */}
          <UserAPIProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/bookmark" element={<Bookmark />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/explore" element={<Explore />} />
            </Routes>
          </UserAPIProvider>
          {/* <People /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
