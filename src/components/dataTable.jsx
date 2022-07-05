import React, {useState, lazy, Suspense} from 'react';
// import DataTable from 'react-data-table-component';
import { mockedData } from '../data/mockedDataForm';
import styled from "styled-components";
import { EmployeeContext } from '../data/context/context';
const DataTable = lazy(() => import('react-data-table-component'));



//Docs lib --> https://jbetancur.github.io/react-data-table-component/?path=/story/getting-started-examples--page

const EmployeeTableWrapper = styled.div`
  width: 95%;
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

const customStyles = {
  rows: {
      style: {
          minHeight: '50px', // override the row height
      },
  },
  headCells: {
      style: {
          fontSize: "1.4em",
          fontWeight: "700",
          '&:hover': {
            cursor: 'pointer',
            color: "green",
            textDecoration : "underline"
          },    
      },
  },
  cells: {
      style: {
          fontSize: "1.2em",
          fontFamily: "agence fb", 
      },
  },
};

const handleSort = (column, sortDirection) => console.log(column.selector, sortDirection);

const Table = () => {
  const context = React.useContext(EmployeeContext);
	const employeesData = context.employeesData;
  let allData = []
  allData.push(...mockedData);
  allData.push(...employeesData)
  const [filteredEmployees, setFilteredEmployees] = useState(allData)

   function handleChange(e){
    if(e.target.value.length > 0) {
      let valueInput = document.getElementById("search").value
        const matchingValues = []
          allData.forEach(employee => {
            const firstName = employee.firstName.toLowerCase()
            const lastName = employee.lastName.toLowerCase()
            const department = employee.department.toLowerCase()
            const state = employee.state.toLowerCase()
            const city = employee.city.toLowerCase()
            const zipCode = employee.zipCode
            const birthDate = employee.dateBirth
            const startDate = employee.startDate

              if(firstName.includes(valueInput.toLowerCase()) || lastName.includes(valueInput.toLowerCase()) || department.includes(valueInput.toLowerCase()) ||
                  city.includes(valueInput.toLowerCase()) || state.includes(valueInput.toLowerCase()) || zipCode.includes(valueInput) ||
                  birthDate.includes(valueInput) || startDate.includes(valueInput)){
                  matchingValues.push(employee)
              }
               })
               setFilteredEmployees(matchingValues)
           }

           if(e.target.value.length < 2){
               setFilteredEmployees(allData)
           }
   }

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
                <input type={"string"} id={"search"} onChange={handleChange}/>
          </form>
        </div>
        <EmployeeTableWrapper>  
          <Suspense fallback={<p>Loading...</p>}>
            <DataTable columns={columns} data={filteredEmployees} onSort={handleSort} sortFunction={customSort} defaultSortAsc={true} customStyles={customStyles} highlightOnHover={true} responsive={true} striped={true} persistTableHead={true} pagination paginationRowsPerPageOptions={[10, 25, 50, 100]}/>
          </Suspense>
        </EmployeeTableWrapper>
    </div>
  )
}

export default Table


