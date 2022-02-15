import React from 'react';
import { useState, useRef } from "react";
import styles from "./Sidebar.module.scss";
import Left from '../Left/Left';
import Right from '../Right/Right';

function Sidebar() {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(500);

  const startResizing = React.useCallback((mouseDownEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            sidebarRef.current.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  React.useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className={styles.appContainer}>
      <div
        ref={sidebarRef}
        className={styles.appSidebar}
        style={{ width: sidebarWidth }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className={styles.appSidebarContent} >
          <Left />
        </div>
        <div className={styles.appSidebarResizer} onMouseDown={startResizing} />
      </div>
      <div className={styles.appFrame} >
        <Right />
      </div>
    </div>
  );
}

export default Sidebar;