import logo from "./logo.svg";
import "./App.scss";
import SideBar from "./Components/SideBar/SideBar";
import Main from "./Components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import AuthWrapper from "./Components/AuthWrapper/AuthWrapper";
import Loader from "./Components/Loader/Loader";
import { useSelector } from "react-redux";

function App() {
  const { loading } = useSelector((state) => state.login);

  return (
    <div className="Todo-app-container">
      <BrowserRouter>
        <AuthWrapper>
          <SideBar />
        </AuthWrapper>
        {loading && <Loader />}
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
