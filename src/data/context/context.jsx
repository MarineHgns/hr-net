import React from 'react';
import { useState } from "react";

export const EmployeeContext = React.createContext({ employeesData: [] });

const EmployeeContextProvider = ({ children }) => {
    const [employeesData, setEmployeesData] = useState([]);

    const addEmployee = (newEmployeeData) => {
        setEmployeesData([
            ...employeesData,
            formatEmployee(newEmployeeData)
        ]);
    };

    const value = { employeesData, addEmployee };
    
    return (
        <EmployeeContext.Provider value={value}>
            {children}
        </EmployeeContext.Provider>
    );
};

/**
 * Takes an employee object and returns a new employee object with the dateBirth and
 * startDate properties formatted as dates.
 * @returns The employee object.
 */
export const formatEmployee = (employee) => {
    employee.dateBirth = formatDate(employee.dateBirth);
    employee.startDate = formatDate(employee.startDate);

    return employee;
}

/**
 * Function take a date as a parameter and returns a new date in a different format.
 * @returns a formatted date.
 */
const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en");
}

export default EmployeeContextProvider;