
const employeeTable = document.getElementById('employees');
const employeeForm = document.getElementById('employee-form');

// Create an array to store employees
let employees = [];

// Function to add an employee
function addEmployee(name, lastName, position) {
  const employee = {
    name,
    lastName,
    position
  };
  employees.push(employee);
  displayEmployees();
}

// Function to delete an employee
function deleteEmployee(index) {
  if (confirm('¿Estás seguro de eliminar al empleado?')) {
    employees.splice(index, 1);
    displayEmployees();
  }
}

// Function to update an employee
function updateEmployee(index) {
  const name = prompt('Ingrese el nuevo nombre del empleado:');
  const lastName = prompt('Ingrese el nuevo apellido del empleado:');
  const position = prompt('Ingrese el nuevo cargo del empleado:');
  if (confirm('¿Estás seguro de actualizar al empleado?')) {
    employees[index] = {
      name,
      lastName,
      position
    };
    displayEmployees();
  }
}

// Function to display employees in the table
function displayEmployees() {
  employeeTable.innerHTML = '';
  employees.forEach((employee, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.lastName}</td>
      <td>${employee.position}</td>
      <td>
        <button onclick="deleteEmployee(${index})">Eliminar</button>
        <button onclick="updateEmployee(${index})">Actualizar</button>
      </td>
    `;
    employeeTable.appendChild(row);
  });
}

// Event listener for the form submission
employeeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const lastName = document.getElementById('last-name').value;
  const position = document.getElementById('position').value;
  addEmployee(name, lastName, position);
  employeeForm.reset();
});


