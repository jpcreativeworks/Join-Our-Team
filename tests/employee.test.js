const Employee = require('../library/Employee')
test('testing the employee name', function() {
     let newEmployee = new Employee ('Jane');
     expect (newEmployee.name).toBe('Jane');
})
test('testing the employee id', function() {
    let newEmployee = new Employee ('Jane', '123id');
    expect (newEmployee.id).toBe('123id');
})
test('testing the employee email', function() {
    let newEmployee = new Employee ('Jane','123id','Jane@email.com');
    expect (newEmployee.email).toBe('Jane@email.com');
})
// methods
test('testing the get name', function() {
    let newEmployee = new Employee ('Jane');
    expect (newEmployee.getName()).toBe('Jane');
})
test('testing the get id', function() {
   let newEmployee = new Employee ('Jane', '123id');
   expect (newEmployee.getId()).toBe('123id');
})
test('testing the get email', function() {
   let newEmployee = new Employee ('Jane','123id','Jane@email.com');
   expect (newEmployee.getEmail()).toBe('Jane@email.com');
})
