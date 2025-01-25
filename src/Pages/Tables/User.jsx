import UserForm from "Components/StructurePage/Forms/UserForm/UserForm";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import useCurd from "Hooks/useCurd";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const User = () => {
  const name = "user";
  const navigate = useNavigate();
  const { remove } = useCurd()


  const deleteUser = async (list, refetch) => {
    await remove(name, Object.keys(list))
    refetch()
    return true
  }

  return (
    <>
      <LayoutWrapper
        name={name}
        onClickDelete={deleteUser}
        FormRender={(props) => {
          console.log(props, 'props');

          return <UserForm {...props} />
        }}
      // onClickDelete={}
      // onClickAdd={}
      // onClickPrint={}
      // onClickView={}
      // onSearch={}
      />
    </>
  );
};

export default User;
