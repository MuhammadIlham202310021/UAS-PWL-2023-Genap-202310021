import React from "react";
import Footer from "./components/footers/Footer";
import HeaderNav from "./components/headers/HeaderNav";
// import PageMenu from "../modules/components/Menus/PageMenu";
// import Order from "../modules/components/Order/Order";
// import PageOrder from "../modules/components/Order/PageOrder";
// import HeroMenu from "./components/heroes/HeroMenu";
import ModalPopUp from "./components/modals/Modals";

export default function Layouts(props) {
  return (
    <div id="main-layout">
      <HeaderNav />
      {/* <HeroMenu /> */}

      <main className="mt-20 py-10">{props.children}</main>
      <ModalPopUp />
      <Footer />
    </div>
  );
}
