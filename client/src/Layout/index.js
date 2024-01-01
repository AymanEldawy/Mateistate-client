import React, { useState, useEffect } from 'react';
import Header from './Header';
import Menu from './Menu';
import Sidebar from './Sidebar';
import Footer from './Footer';
import PopupForm from 'Components/Forms/CustomForm/PopupForm';
import Backdrop from 'Components/Backdrop/Backdrop';

const Layout = ({ children, containerClassName, bodyClassName }) => {
  const [mode, setMode] = useState('dark');
  const [open, setOpen] = React.useState(false);

  let resize = () => {
    if (window.innerWidth > 1024 && open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <React.Fragment>
      <div id="layout-wrapper" className={"flex flex-col h-screen " + containerClassName}>
        <Header setOpen={setOpen} mode={mode} setMode={setMode} />
        <Menu />
        <Backdrop open={open} onClose={() => setOpen(false)} />
        <Sidebar setOpen={setOpen} open={open} />
        <div className={"main-content my-8 flex-1 " + bodyClassName}>{children}</div>
        <Footer />
      </div>
      {/* <Alert  /> */}
      <PopupForm />
    </React.Fragment>
  );
};

export default Layout;
