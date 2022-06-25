export const createEmployee = (employeeData, context) => {
    const employee = {
        firstName: employeeData.firstName,
        lastName: employeeData.lastName,
        dateBirth: employeeData.dateBirth,
        startDate: employeeData.startDate,
        street: employeeData.street,
        city: employeeData.city,
        state: employeeData.state,
        zipCode: employeeData.zipCode,
        department: employeeData.department,
    };

    context.addEmployee(employee);
}