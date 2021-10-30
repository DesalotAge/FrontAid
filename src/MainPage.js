import React from "react";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";


export const MainPage = () => {
    return(
        <div className="app">
        
          <Sidebar />
          <Map />
          
        </div>
    )
}