import { Link } from "react-router-dom"
import React from 'react';
import { useState } from 'react';
import CustomDatePicker from "../components/datePicker";
import { states, departments } from "../data/data"
import Modal  from "../components/modal";
import { createEmployee } from "../data/context/services";
import { EmployeeContext } from "../data/context/context";
import showModal from "../components/modalFn";
import Dropdown from "react-npm-library-dropdown"


const CreateEmployee = () => {
    const [employeeData, setEmployeeData] = useState({
      firstName: "",
      lastName: "",
      dateBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    });

    const context = React.useContext(EmployeeContext);

    function handleFormChange(e) {
        setEmployeeData((employee) =>({
            ...employee,
            [e.target.id]: e.target.value,
          }));
    }

    function handleSubmit(e){
        e.preventDefault();
        document.querySelector(".modal-wrapper").classList.add("modal--active")
        showModal()
        createEmployee(employeeData, context);
        setEmployeeData({
        firstName: "",
        lastName: "",
        dateBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: "",})
    }
   

    return (
      <div>
            <div className="container">
                <h1>HRnet</h1>
                <Link to="/list-employee">
                    <button className="button-87 center">View Current Employees</button>
                </Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee" className="form-container" onSubmit={handleSubmit}>
                    <label htmlFor="firstName" className="left">First Name</label>
                    <input type="text" id="firstName" name="firstName" autoComplete="given-name" value={employeeData.firstName} onChange={handleFormChange} required min={3} max={20} pattern={"[A-Za-z]{3,20}"}/>

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" autoComplete="family-name" value={employeeData.lastName} onChange={handleFormChange} required min={3} max={20} pattern={"[A-Za-z]{3,20}"}/>

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <CustomDatePicker value={employeeData.dateBirth} setDate={(date) => setEmployeeData({ ...employeeData, dateBirth: date })}/><br/>

                    <label htmlFor="start-date">Start Date</label>
                    <CustomDatePicker value={employeeData.startDate} setDate={(date) => setEmployeeData({ ...employeeData, startDate: date })}/><br/>

                    <fieldset className="form-address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" autoComplete="street-address" name="street" value={employeeData.street} onChange={handleFormChange} required min={3} max={60}/>

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" autoComplete="address-level1" name="city" value={employeeData.city} onChange={handleFormChange} required min={3} max={20} pattern={"[A-Za-z]{3,20}"}/>
                        
                        <Dropdown label="States" options={states} id="state" handleFormChange={handleFormChange}/>

                        <label htmlFor="zipCode">Zip Code</label>
                        <input id="zipCode" type="number" autoComplete="postal-code" name="zipCode" aria-labelledby="zipCode" value={employeeData.zipCode} onChange={handleFormChange} required  pattern={"[0-9]{3,20}"}/>
                    </fieldset>
                    <br/>
                        
                        <Dropdown label="Departments" options={departments} id="department" handleFormChange={handleFormChange}/>
                
                    <br/>
                  <button type="submit" value={'save'} className='modal-toggle button-87' aria-label="save employee">Save employee</button>
                </form>
               <Modal />
        </div>
       </div>
    )
}

export default CreateEmployee