import React from "react";
import { DataProvider } from "./GobalState";
import Main from "./components/Main";
const App = () => {

  return (
    <DataProvider>
      <Main/>
    </DataProvider>
  );
};

export default App;
