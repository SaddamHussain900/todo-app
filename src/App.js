import logo from './logo.svg';
import './App.scss';
import SideBar from './Components/SideBar/SideBar';
import Main from './Components/Main/Main';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="Todo-app-container">
      <BrowserRouter>
      <SideBar/>
      <Main/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
