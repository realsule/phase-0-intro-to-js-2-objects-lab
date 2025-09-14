// Initializing employee object 
const employee = {
  name: 'John Kamau',
  streetAddress: 'Nairobi'
};

// Function that returns a new object with updated key-value without mutating original
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

// Function that mutates the original employee object with new key-value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

//function that returns a new Object that doesn't include the identified key 
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = {...employee};
  delete newEmployee[key];
  return newEmployee;
}

// Function that mutates the original employee object by removing the key
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}