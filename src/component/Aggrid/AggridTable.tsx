import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useEffect, useState } from 'react';
import React from 'react';

interface AgGridTableProps {
  rowData: any;
  columnDefs: any;
  classNameCss?: string;
  defaultColDef?: any; // Corrected type from string to any
  rowClass?: string;
  rowHeight?: number;
  getRowClass?: (params: any) => string | string[] | undefined;
  onGridReady?: any;
  onRowClicked?: (params: any) => void;
  handleCheckboxClick?: (params: any) => void;
 
}

const GridTable = ({
  rowData,
  rowClass,
  columnDefs,
  classNameCss,
  rowHeight,
  getRowClass,
  onGridReady,
  onRowClicked,
  handleCheckboxClick,
}: AgGridTableProps) => {
  const initialTestColumns = [   {
    headerCheckboxSelection: true,
    checkboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    width: 150,
    sortable: true,
    headerClass: 'header-class',
    cellRenderer: 'agGroupCellRenderer',
    cellEditor: 'agCheckboxCellEditor',
  },
  ];

  const [tableColData, setTableColData] = useState([...initialTestColumns, ...columnDefs]);

  useEffect(() => {
    setTableColData((prev) => [...initialTestColumns, ...columnDefs]);
  }, [columnDefs]);

 

  return (
    <div className={classNameCss} style={{ height: 500, width: '95%' }}>
      <AgGridReact
        rowSelection="multiple"
        rowData={rowData}
        rowClass={rowClass}
        rowHeight={rowHeight}
        getRowClass={getRowClass}
        columnDefs={tableColData}
        defaultColDef={{ flex: 1, minWidth: 100, resizable: true }}
        onGridReady={onGridReady}
        onRowClicked={onRowClicked}
        onSelectionChanged={handleCheckboxClick}
        className="ag-theme-quartz input-theme dark:bg-[#0d1117]"
      />
    </div>
  );
};

export default GridTable;