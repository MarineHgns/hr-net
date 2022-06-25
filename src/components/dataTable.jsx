import React, {useState} from 'react';
import DataTable from 'react-data-table-component';
import { mockedData } from '../data/mockedDataForm';
import styled from "styled-components";
import { EmployeeContext } from '../data/context/context';

//Docs lib --> https://jbetancur.github.io/react-data-table-component/?path=/story/getting-started-examples--page

const EmployeeTableWrapper = styled.div`
  width: 80%;
  margin: auto;
`

const customSort = (rows, selector, direction) => {
	return rows.sort((a, b) => {
		const aField = selector(a).toLowerCase();
		const bField = selector(b).toLowerCase();

		let comparison = 0;

		if (aField > bField) {
			comparison = 1;
		} else if (aField < bField) {
			comparison = -1;
		}

		return direction === 'desc' ? comparison * -1 : comparison;
	});
};

const columns = [
  {
      name: 'First Name',
      selector: row => row.firstName,
      sortable: true,
			wrap: true,
  },
  {
      name: 'Last Name',
      selector: row => row.lastName,
      sortable: true,
			wrap: true,
  },
  {
      name: 'Start date',
      selector: row => row.startDate,
      sortable: true,
			wrap: true,
  },
  {
      name: 'Department',
      selector: row => row.department,
      sortable: true,
			wrap: true,
  },
  {
      name: 'Date of birth',
      selector: row => row.dateBirth,
      sortable: true,
			wrap: true,
  },
  {
      name: 'Street',
      selector: row => row.street,
      sortable: true,
			wrap: true,
  },
  {
      name: 'City',
      selector: row => row.city,
      sortable: true,
			wrap: true,
  },
  {
      name: 'State',
      selector: row => row.state,
      sortable: true,
  },
  {
      name: 'Zip code',
      selector: row => row.zipCode,
      sortable: true,
			wrap: true,
  },
];



const Table = () => {
  const [searchValue, setSearchValue] = useState("")
  const context = React.useContext(EmployeeContext);
	const employees = context.employeesData;
  let allData = []
  allData.push(...mockedData);
  allData.push(...employees)
  const [filteredEmployees, setFilteredEmployees] = useState(allData)


   function handleChange(e){
    console.log(e.target.value);
    setSearchValue(e.target.value.toLowerCase())

    if(searchValue) {
    console.log(e.target.value);
    setSearchValue(e.target.value.toLowerCase())
    console.log(searchValue);
               const matchingValues = []
               mockedData.forEach(employee => {
                   const firstName = employee.firstName.toLowerCase()
                   const lastName = employee.lastName.toLowerCase()
                   const department = employee.department.toLowerCase()
                   const state = employee.state.toLowerCase()
                   const city = employee.city.toLowerCase()
                   const zipCode = employee.zipCode
                   const birthDate = employee.dateBirth
                   const startDate = employee.startDate

                   if(firstName.includes(searchValue.toLowerCase()) || lastName.includes(searchValue.toLowerCase()) || department.includes(searchValue.toLowerCase()) ||
                        city.includes(searchValue.toLowerCase()) || state.includes(searchValue.toLowerCase()) || zipCode.includes(searchValue) ||
                         birthDate.includes(searchValue) || startDate.includes(searchValue) ){
                       matchingValues.push(employee)
                   }
               })
               setFilteredEmployees(matchingValues)
           }
           if(!searchValue || searchValue.length < 3){
               setFilteredEmployees(mockedData)
           }
   }

  const handleSort = (column, sortDirection) => console.log(column.selector, sortDirection);

  if(filteredEmployees === null){
      return <div className='no-results-table'>
      Oh no. <br/>
      No results yet. <br/>
      Please add an employee to view it here.
      </div>
  }
  
  return (
    <div>
        <div id={"searchBar"}>
          <form>
                <label htmlFor={"search"} className="search-label">Search :</label>
                <input type={"string"} id={"search"} onChange={handleChange} />
                </form>
        </div>
        <EmployeeTableWrapper>          
            <DataTable columns={columns} data={filteredEmployees} onSort={handleSort} sortFunction={customSort} pagination/>     
        </EmployeeTableWrapper>
    </div>
  )
}

export default Table


