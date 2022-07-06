import { Routes, Route } from "react-router-dom"
import Footer from "./components/footer";
import Home from "./pages/home";
import "./css/main.css"
import Header from "./components/header";
import Error from "./pages/error"
import AddEmployee from "./pages/addEmployee";
import ListEmployee from "./pages/listEmployee";
import React from "react";
import EmployeeContextProvider from "./data/context/context";

function App() {
  return (
    <EmployeeContextProvider>
    <div className="App">
        < Header />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/hr-net" element={<ListEmployee />}/>
            <Route path="/add-employee" element={<AddEmployee />}/>
            <Route path="/list-employee" element={<ListEmployee/>}/>
            <Route path="/*" element={<Error />}/>
          </Routes>
          < Footer />

      </div>
      </EmployeeContextProvider>
  );
}

export default App;
