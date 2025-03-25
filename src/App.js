import logo from "./logo.svg";
import "./App.scss";
import SideBar from "./Components/SideBar/SideBar";
import Main from "./Components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import AuthWrapper from "./Components/AuthWrapper/AuthWrapper";

function App() {
  return (
    <div className="Todo-app-container">
      <BrowserRouter>
        <AuthWrapper>
          <SideBar />
        </AuthWrapper>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
