import React from "react";

export default function Cell({ row, col, setCellSelected, className }) {
  const onMouseDown = (event) => {
    if (event.buttons != 1) {
      return;
    }
    if (event.ctrlKey) {
      setCellSelected(row, col, false);
    } else {
      setCellSelected(row, col, true);
    }
  };

  const onMouseEnter = (event) => {
    if (event.buttons != 1) {
      return;
    }
    if (event.ctrlKey) {
      setCellSelected(row, col, false);
    } else {
      setCellSelected(row, col, true);
    }
  };

  return (
    <div
      className={className}
      onDragStart={(event) => {
        event.preventDefault();
      }}
      onMouseEnter={onMouseEnter}
      onMouseDown={onMouseDown}
    />
  );
}
