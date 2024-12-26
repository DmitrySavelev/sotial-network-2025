import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
// import News from "./components/News/News";
// import Music from "./components/Music/Music";
// import Settings from "./components/Settings/Settings";

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile posts={props.posts} />}></Route>
            <Route path="/dialogs/*" element={<Dialogs />}></Route>
            {/* <Route path="/news" element={<News />}></Route>
            <Route path="/music" element={<Music />}></Route>
            <Route path="/settings" element={<Settings />}></Route> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
