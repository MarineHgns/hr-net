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

export const formatEmployee = (employee) => {
    employee.dateBirth = formatDate(employee.dateBirth);
    employee.startDate = formatDate(employee.startDate);

    return employee;
}

const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en");
}

export default EmployeeContextProvider;