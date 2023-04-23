import React from "react";
import Cell from "./Cell";

export default function Grid({ rows, cols, grid, setCellSelected }) {
  let cells = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let className = "";
      className = grid[row][col] ? "cell-on" : "cell-off";
      cells.push(
        <Cell
          key={Math.random()}
          className={className}
          row={row}
          col={col}
          setCellSelected={setCellSelected}
        />
      );
    }
  }

  const width = cols * 16;

  return (
    <div draggable="false" className="grid" style={{ width }}>
      {cells}
    </div>
  );
}
