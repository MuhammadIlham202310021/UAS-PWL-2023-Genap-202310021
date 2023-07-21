// import React from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import PageMenu from "../modules/components/Menus/PageMenu";
import OrderData from "../modules/components/Order/OrderData";
import About from "../modules/components/Abouts/About";
import App from "../App";
import MenuBreakfast from "../modules/components/Menus/widgets/MenuBreakfast";
import MenuLunch from "../modules/components/Menus/widgets/MenuLunch";
import MenuDinner from "../modules/components/Menus/widgets/MenuDinner";
import MenuDrink from "../modules/components/Menus/widgets/MenuDrink";
// import Breakfast from "../modules/components/Menus/Breakfast";

export default function AppRoute() {
  return (
    <Routes>
      <Route
        index
        element={
          <Layouts>
            <PageMenu />
            {/* <App /> */}
          </Layouts>
        }
      />
      <Route
        path="appmenu"
        element={
          <Layouts>
            <App />
          </Layouts>
        }
      >
        <Route path="Menu-Breakfast" element={<MenuBreakfast />} />
        <Route path="Menu-Lunch" element={<MenuLunch />} />
        <Route path="Menu-Dinner" element={<MenuDinner />} />
        <Route path="Menu-Drink" element={<MenuDrink />} />
      </Route>
      <Route
        path="pagemenu"
        element={
          <Layouts>
            <PageMenu />
          </Layouts>
        }
      />
      <Route
        path="orderdata"
        element={
          <Layouts>
            <OrderData />
          </Layouts>
        }
      />
      <Route
        path="about"
        element={
          <Layouts>
            <About />
          </Layouts>
        }
      />
    </Routes>
  );
}
