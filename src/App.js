import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FileUploader } from './components/fileUploader'
import EntityProvider from './context'
import { FileTable } from './components/displayTable'

function App() {
  return (
    <>
      <EntityProvider>
        <FileUploader />
        <FileTable />
      </EntityProvider>
    </>
  );
}

export default App;
