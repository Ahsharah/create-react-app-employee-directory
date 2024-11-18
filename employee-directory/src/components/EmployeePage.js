import React from 'react';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = ({ employees, onEmployeeSelect, searchTerm }) => {
  // Filter employees based on search term
  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-y-auto">
      {filteredEmployees.map((employee) => (
        <EmployeeListItem 
          key={employee.id}
          employee={employee}
          onClick={onEmployeeSelect}
        />
      ))}
    </div>
  );
};

export default EmployeeList;