
import './App.css';
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Nav from './components/nav/nav'
import AnimatedRoutes from './components/animatedRoutes';

function App() {
  const [menu, setMenu] = useState(false);
  const showmenu = () => {
    setMenu(prevMenu => !prevMenu);
  }

  return (

    <div className="App">
      < BrowserRouter >
        <Nav menu={menu} showmenu={showmenu}></Nav>
        {menu ? '' : <AnimatedRoutes />}
      </ BrowserRouter>
    </div >
  );
}

export default App;
