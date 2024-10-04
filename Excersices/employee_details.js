const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: "JavaScript"},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: "Python" },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: "Java" },
    { id: 4, name: 'Anne Parker', age: 25, department: 'Finance', salary: 55000, specialization: "JavaScript" },
    { id: 5, name: 'Tom Cook', age: 40, department: 'IT', salary: 62000, specialization: "Java" },
    { id: 6, name: 'Jerry Garcia', age: 45, department: 'HR', salary: 50000, specialization: "Python" },
    { id: 7, name: 'Marylin Manson', age: 35, department: 'IT', salary: 60000, specialization: "JavaScript" },
    { id: 8, name: 'Alice Cooper', age: 30, department: 'Finance', salary: 65000, specialization: "Java" },
    { id: 9, name: 'John Travolta', age: 40, department: 'HR', salary: 55000, specialization: "Python" },
  ];

   // Function to display all employees
function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

function findSpecialization(){
    const findSpecialization = employees.filter(employee => employee.specialization === 'JavaScript');
    const findSpecializationDisplay = findSpecialization.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = findSpecializationDisplay;
}