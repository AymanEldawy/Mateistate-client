import { PlusIcon } from "Components/Icons";
import useContextMenu from "Hooks/useContextMenu";
import { useEffect } from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";

export const ContextMenuComponent = ({
  id,
  onSelectedItem,
  setOpen
}) => {

  return (
    <ContextMenu id={id}>
      <MenuItem i data={{ foo: 'bar' }} onClick={onSelectedItem()}>
        <PlusIcon circle /> Add Class
      </MenuItem>
      <MenuItem data={{ foo: 'bar' }} onClick={() => setOpen(true)}>
        Edit Class
      </MenuItem>
      <MenuItem data={{ foo: 'bar' }} onClick={onSelectedItem()}>
        Delete Class
      </MenuItem>
      <MenuItem divider />
      <MenuItem data={{ foo: 'bar' }} onClick={onSelectedItem()}>
        <PlusIcon circle />
        Add material
      </MenuItem>
    </ContextMenu>

  );
};
