
import Header from './Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from './Routing';
import { createContext, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
export let Store=createContext();
function App() {
  const [token,setToken] = useState("");
  return (
    <Store.Provider value={[token,setToken]}>
       <Header/> 
        <Routing/> 

    </Store.Provider >
  );
}

export default App;
