import React from 'react';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = (props) => {
  // Destructure props with default values
  const { 
    employees = [], 
    onEmployeeSelect = () => {}, 
    searchTerm = '' 
  } = props;

  // Safety check - if employees is not defined or not an array, render nothing
  if (!employees || !Array.isArray(employees)) {
    console.log('No employees data available');
    return <div>Loading...</div>;
  }

  // Filter employees only if we have a search term
  const filteredEmployees = searchTerm.trim() === '' 
    ? employees 
    : employees.filter(employee => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        return (
          employee?.name?.toLowerCase().includes(lowerSearchTerm) ||
          employee?.title?.toLowerCase().includes(lowerSearchTerm)
        );
      });

  // Render the list
  return (
    <div className="overflow-y-auto">
      {filteredEmployees.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          No employees found
        </div>
      ) : (
        filteredEmployees.map((employee) => (
          <EmployeeListItem 
            key={employee.id || Math.random()}
            employee={employee}
            onClick={onEmployeeSelect}
          />
        ))
      )}
    </div>
  );
};

export default EmployeeList;