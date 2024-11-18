import React from 'react';

const EmployeeListItem = ({ employee, onClick }) => {
  if (!employee) return null;

  return (
    <div 
      className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
      onClick={() => onClick && onClick(employee)}
    >
      <img 
        src={employee.avatar || '/api/placeholder/40/40'}
        alt={employee.name || 'Employee'}
        className="w-10 h-10 rounded-full mr-3"
      />
      <div>
        <h3 className="font-medium">{employee.name || 'Unknown Employee'}</h3>
        <p className="text-sm text-gray-600">{employee.title || 'No Title'}</p>
      </div>
    </div>
  );
};

export default EmployeeListItem;