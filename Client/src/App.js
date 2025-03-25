import "./App.scss";
import SideBar from "./Components/SideBar/SideBar";
import Main from "./Components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import { useSelector } from "react-redux";

function App() {
  const { loading, isLoggedIn } = useSelector((state) => state.login);

  return (
    <div className="Todo-app-container">
      <BrowserRouter>
        {isLoggedIn && <SideBar />}

        {loading && <Loader />}

        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
