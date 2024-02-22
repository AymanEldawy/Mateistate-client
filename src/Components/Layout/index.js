import React, { useState, useEffect } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Backdrop from "Components/Global/Backdrop";
import PopupForm from "Components/StructurePage/Forms/CustomForm/PopupForm";

const Layout = ({ children, containerClassName, bodyClassName }) => {
  return (
    <React.Fragment>
      <div className={"main-content my-8 flex-1 " + bodyClassName}>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
