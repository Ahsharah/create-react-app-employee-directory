import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmployeeList from './components/EmployeeList';
import EmployeePage from './components/EmployeePage';

const employeeData = [
  {
    id: 1,
    name: 'Atlas Chen',
    title: 'Quantum Computing Pioneer',
    avatar: '/api/placeholder/40/40',
    contactInfo: {
      office: '781-000-0001',
      mobile: '617-000-0001',
      sms: '617-000-0001',
      email: 'atlas@quantumtech.ai'
    }
  },
  {
    id: 2,
    name: 'Luna Patel',
    title: 'Director of User Happiness',
    avatar: '/api/placeholder/40/40',
    contactInfo: {
      office: '781-000-0002',
      mobile: '617-000-0002',
      sms: '617-000-0002',
      email: 'luna@quantumtech.ai'
    }
  }
];

function App() {
  console.log('Initial employeeData:', employeeData); // Debug log

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(employeeData[0]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="grid grid-cols-2 gap-0 border-t border-gray-200">
        <div className="border-r border-gray-200">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={(value) => setSearchTerm(value)}
          />
          <EmployeeList 
            employees={employeeData} // Pass the data directly
            onEmployeeSelect={(employee) => setSelectedEmployee(employee)}
            searchTerm={searchTerm}
          />
        </div>
        <div>
          {selectedEmployee && <EmployeePage employee={selectedEmployee} />}
        </div>
      </div>
    </div>
  );
}

export default App;