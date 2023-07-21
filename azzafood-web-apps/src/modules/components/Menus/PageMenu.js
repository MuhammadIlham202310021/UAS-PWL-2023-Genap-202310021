// import React, { Component } from "react";
import React, { Component } from "react";
import Menu from "./widgets/Menu";
import MenuBreakfast from "./widgets/MenuBreakfast";
// import { Outlet } from "react-router-dom";
import OrderData from "../Order/OrderData";
import HeroMenu from "../../../layouts/components/heroes/HeroMenu";

export default class PageMenu extends Component {
  render() {
    return (
      <div id="pagemenu">
        <div className="container mt-2">
          <HeroMenu />
          <div className="pilih-menu">
            <p>Silahkan pilih kategori </p>
          </div>
          <div className="page-menu">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}
