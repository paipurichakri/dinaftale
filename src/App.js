import React from "react";
// import Header1 from "./Header/Header1";
// import Footer1 from "./Footer/Footer1"
import "bootstrap/dist/css/bootstrap.min.css";
// import Routing from './Routing';
// import { createContext, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap.min.js";
import Interview1 from "./Innerpages/Interview1";
// export let Store=createContext();
function App() {
  // const [token,setToken] = useState("");
  return (
    // <Store.Provider value={[token,setToken]}>
    //    <Header1/> 
    //     <Routing/> 
    //    <Footer1/>
    // </Store.Provider >
    <Interview1/>
  );
}

export default App;
