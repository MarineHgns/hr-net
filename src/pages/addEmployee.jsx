import { Link } from "react-router-dom"
import React from 'react';
import { useState } from 'react';
import CustomDatePicker from "../components/datePicker";
import Dropdown from "../components/dropdown";
import { states, departments } from "../data/data"
import Modal  from "../components/modal";
import showModal from "../components/modalFn";

function AddEmployee() {
    
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
    console.log(employeeData);
    console.log(states);

    function handleFormChange(e) {
        setEmployeeData((employee) =>({
            ...employee,
            [e.target.id]: e.target.value,
          }));
    }

    function handleSubmit(e){
        e.preventDefault();
        // if (employeeData.firstName.length ===0) {
        //     alert("error")
        //     return
        // } 
        showModal()
    }


    return (
      <div>
            <div className="container">
                <Link to="/list-employee">
                    <button className="button-87 center">View Current Employees</button>
                </Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee" className="form-container">
                    <label htmlFor="firstName" className="left">First Name</label>
                    <input type="text" id="firstName" name="firstName" autoComplete="given-name" value={employeeData.firstName} onChange={handleFormChange} required/>

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" autoComplete="family-name" value={employeeData.lastName} onChange={handleFormChange} required/>

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <CustomDatePicker value={employeeData.dateBirth} setDate={(date) => setEmployeeData({ ...employeeData, dateBirth: date })}/><br/>

                    <label htmlFor="start-date">Start Date</label>
                    <CustomDatePicker value={employeeData.startDate} setDate={(date) => setEmployeeData({ ...employeeData, startDate: date })}/><br/>

                    <fieldset className="form-address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" autoComplete="street-address" name="street" value={employeeData.street} onChange={handleFormChange} required />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" autoComplete="address-level1" name="city" value={employeeData.city} onChange={handleFormChange} required/>

                        <Dropdown label="States" options={states} id="state" handleFormChange={handleFormChange}/>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zipCode" type="number" autoComplete="postal-code" name="zipCode" value={employeeData.zipCode} onChange={handleFormChange} required/>
                    </fieldset>
                    <br/>

                        <Dropdown label="Departments" options={departments} id="department" handleFormChange={handleFormChange}/>
                </form>
               <br/>
               <button onClick={handleSubmit} className='modal-toggle' >Save</button>
               <Modal />
        </div>
       </div>
    )
}

export default AddEmployee