import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App ">
      <div className="blur" style={{top:'-18%', right:'0'}}></div>
      <div className="blur"style={{top:'36%', left:'-8rem'}}></div>
      {/* <Home/> */}
      <ProfilePage/>
    </div>
  );
}

export default App;
