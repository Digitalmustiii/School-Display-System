"use client";

import { useState } from "react";

export const BottomSheet = () => {
  const [showBottomSheet, setShowBottomSheet] = useState(true);
  const [bottomSheetHeight, setBottomSheetHeight] = useState(200);

  const handleStart = () => {
    setBottomSheetHeight(100);
    setShowBottomSheet(true);

    document.documentElement.style.overflow = "hidden";
  };

  const detectLeftMouse = (e: any) => {
    e = e || window.event;

    if ("buttons" in e) {
      return e.buttons === 1;
    }

    let button = e.which || e.button;
    return button === 1;
  };

  const handleClose = () => {
    setShowBottomSheet(false);
    document.documentElement.style.overflow = "none"; //
  };

  const dragStart = (e: any) => {
    if (!detectLeftMouse(e)) return;

    let startY = e.clientY;
    let newHeight: number;

    const dragMove = (e: any) => {
      const delta = startY - e.clientY;
      newHeight = bottomSheetHeight + (delta / window.innerHeight) * 100;
      setBottomSheetHeight(newHeight);
    };
    document.onpointermove = dragMove;

    const dragEnd = () => {
      document.onpointermove = null;
      document.onpointerup = null;

      if (newHeight < 20) {
        handleClose();
      } else if (newHeight < 80) {
        setBottomSheetHeight(50);
      } else {
        setBottomSheetHeight(100);
      }
    };
    document.onpointerup = dragEnd;
  };
  return (
    <div className={`bottom_sheet_container ${showBottomSheet ? "show" : ""}`}>
      <div
        className="bottom_sheet_content"
        style={{ height: `${bottomSheetHeight}` }}
      >
        <div className="bottom_sheet_header">
          <div className="drag_icon" onPointerDown={dragStart}>
            <span>...</span>
          </div>
        </div>
        <h3>Hello</h3>
      </div>
    </div>
  );
};
