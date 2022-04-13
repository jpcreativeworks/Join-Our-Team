const Engineer = require('../library/Engineer.js')
test('testing the engineer name', function() {
     let newEngineer = new Engineer ('Jane');
     expect (newEngineer.name).toBe('Jane');
})
test('testing the engineer id', function() {
    let newEngineer = new Engineer ('Jane', '123id');
    expect (newEngineer.id).toBe('123id');
})
test('testing the engineer email', function() {
    let newEngineer = new Engineer ('Jane','123id','Jane@email.com');
    expect (newEngineer.email).toBe('Jane@email.com');
})
test('testing the engineer github', function() {
    let newEngineer = new Engineer ('Jane','123id','Jane@email.com','https://github.com/user/janedoe123');
    expect (newEngineer.github).toBe('https://github.com/user/janedoe123');
})
// methods
test('testing the get name', function() {
    let newEngineer = new Engineer ('Jane');
    expect (newEngineer.getName()).toBe('Jane');
})
test('testing the get id', function() {
   let newEngineer = new Engineer ('Jane', '123id');
   expect (newEngineer.getId()).toBe('123id');
})
test('testing the get email', function() {
   let newEngineer = new Engineer ('Jane','123id','Jane@email.com');
   expect (newEngineer.getEmail()).toBe('Jane@email.com');
})
test('testing the get github', function() {
    let newEngineer = new Engineer ('Jane','123id','Jane@email.com','https://github.com/user/janedoe123');
    expect (newEngineer. getGitHub()).toBe('https://github.com/user/janedoe123');
})