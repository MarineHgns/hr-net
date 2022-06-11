import { Link } from "react-router-dom"
import React from 'react';

function AddEmployee() {
    return (
      <div>
      <div className="title">
      <h1>HRnet</h1>
      </div>
      <div className="container">
      <Link to="/list-employee">
      <button className="button-87 center">View Current Employees</button>
      </Link>
      <h2>Create Employee</h2>
      <form action="#" id="create-employee">
          <label htmlFor="first-name" className="left">First Name</label><br/>
          <input type="text" id="first-name" autoComplete="given-name" /><br/>

          <label htmlFor="last-name">Last Name</label><br/>
          <input type="text" id="last-name" autoComplete="family-name"/><br/>

          <label htmlFor="date-of-birth">Date of Birth</label><br/>
          <input id="date-of-birth" type="text" autoComplete="bday" /><br/>

          <label htmlFor="start-date">Start Date</label><br/>
          <input id="start-date" type="text" /><br/>

          <fieldset className="address">
              <legend>Address</legend>

              <label htmlFor="street">Street</label>
              <input id="street" type="text" autoComplete="street-address" />

              <label htmlFor="city">City</label>
              <input id="city" type="text" autoComplete="address-level1"/>

              <label htmlFor="state">State</label>
              <select name="state" id="state" autoComplete="country-name" ></select><br/>

              <label htmlFor="zip-code">Zip Code</label>
              <input id="zip-code" type="number" autoComplete="postal-code" />
          </fieldset>
          <br/>
          <label htmlFor="department">Department</label><br/>
          <select name="department" id="department">
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
          </select>
      </form>
<br/>
      <button onClick= 'saveEmployee()'>Save</button>
  </div>
  </div>
    )
}

export default AddEmployee