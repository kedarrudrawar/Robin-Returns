import React from "react";
import { Position } from "statistics/Position";
import DataTable from "./DataTable";

interface DataTableContainerProps {
  positions: Array<Position>;
  updatedAt: string | null;
}

export function DataTableContainer(
  props: DataTableContainerProps
): JSX.Element {
  return (
    <div className="bottom-container">
      <div className="history-container">
        <DataTable {...props} />
      </div>
    </div>
  );
}

export default DataTableContainer;
