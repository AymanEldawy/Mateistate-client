import { useState } from "react";

const useContextMenu = () => {
  const [activeItemId, setActiveItemId] = useState(null); // Track active item ID for context menu
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });

  // Function to show the context menu at specific coordinates for an item
  const showContextMenu = (itemId, x, y) => {
    setActiveItemId(itemId);
    setContextMenuPosition({ x, y });
  };

  // Function to hide the context menu for the active item
  const hideContextMenu = () => {
    setActiveItemId(null);
  };

  // Event handler for context menu trigger (right-click) on an item
  const handleContextMenu = (itemId, event) => {
    event.preventDefault(); // Prevent default right-click behavior
    const clickX = event.clientX;
    const clickY = event.clientY;
    showContextMenu(itemId, clickX, clickY);
  };
  
  return {
    activeItemId,
    setActiveItemId,
    contextMenuPosition,
    showContextMenu,
    hideContextMenu,
    handleContextMenu,


  };
};

export default useContextMenu;
