import React from 'react';
import { LFiFirm } from './components';



// import GridTable from "./components/Aggrid"


const App = () => {
  // Dummy data for rows
  const dummyRowData = [
    { id: 1, name: 'John Doe', age: 28, country: 'USA' },
    { id: 2, name: 'Jane Smith', age: 32, country: 'UK' },
    { id: 3, name: 'Sam Brown', age: 45, country: 'Canada' },
  ];

  // Dummy column definitions
  const dummyColumnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Age', field: 'age', sortable: true, filter: true },
    { headerName: 'Country', field: 'country', sortable: true, filter: true },
  ];

  return (
    <div>
     
    </div>
  );
};

export default App;
