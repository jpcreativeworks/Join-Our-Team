const Manager = require('../library/Manager.js')
test('testing the manager name', function() {
     let newManager = new Manager ('Jane');
     expect (newManager.name).toBe('Jane');
})
test('testing the manager id', function() {
    let newManager = new Manager ('Jane', '123id');
    expect (newManager.id).toBe('123id');
})
test('testing the manager email', function() {
    let newManager = new Manager ('Jane','123id','Jane@email.com');
    expect (newManager.email).toBe('Jane@email.com');
})
test('testing the manager office number', function() {
    let newManager = new Manager ('Jane','123id','Jane@email.com','123');
    expect (newManager.officeNum).toBe('123');
})
// methods
test('testing the get name', function() {
    let newManager = new Manager ('Jane');
    expect (newManager.getName()).toBe('Jane');
})
test('testing the get id', function() {
   let newManager = new Manager ('Jane', '123id');
   expect (newManager.getId()).toBe('123id');
})
test('testing the get email', function() {
   let newManager = new Manager ('Jane','123id','Jane@email.com');
   expect (newManager.getEmail()).toBe('Jane@email.com');
})
test('testing the get office number', function() {
    let newManager = new Manager ('Jane','123id','Jane@email.com','123');
    expect (newManager.getOfficeNum()).toBe('123');
})