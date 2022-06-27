import React from 'react';
import { Link } from "react-router-dom"
import Table from '../components/dataTable';

const ListEmployee = () => {

  return (
    <div className='table-data-container'>
      <h1>Current Employees</h1>
        <Table />
        <div className='link-container'>
          <Link to="/">
            <h1 className="homepage-link">Return to Homepage</h1>
          </Link>
        </div>
    </div>
  )
}

export default ListEmployee
