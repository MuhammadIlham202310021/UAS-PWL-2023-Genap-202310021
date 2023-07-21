import React, { useState } from "react";
import "./assets/styles/main.css";
import Menu from "./modules/components/Menus/widgets/Menu";
import { Outlet } from "react-router-dom";
import OrderData from "./modules/components/Order/OrderData";

export default function App() {
  const [mychart, setMyChart] = useState([]);
  const handlerAdd2Chart = (v) => {
    setMyChart([...mychart, v]);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-between app">
        <div className="col-8 menupage ">
          <div className="menu">
            <Menu />
          </div>
          <div className="outlet scrollable-card">
            <Outlet context={[mychart, handlerAdd2Chart]} />
          </div>
        </div>
        <div className="col-4 orderpage">
          <OrderData mychart={mychart} />
        </div>
      </div>
    </div>
  );
}
