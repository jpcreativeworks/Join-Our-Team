const Intern = require('../library/Intern.js')
test('testing the intern name', function() {
     let newIntern = new Intern ('Jane');
     expect (newIntern.name).toBe('Jane');
})
test('testing the intern id', function() {
    let newIntern = new Intern ('Jane', '123id');
    expect (newIntern.id).toBe('123id');
})
test('testing the intern email', function() {
    let newIntern = new Intern ('Jane','123id','Jane@email.com');
    expect (newIntern.email).toBe('Jane@email.com');
})
test('testing the intern school input', function() {
    let newIntern = new Intern ('Jane','123id','Jane@email.com','Web School University');
    expect (newIntern.school).toBe('Web School University');
})
// methods
test('testing the get name', function() {
    let newIntern = new Intern ('Jane');
    expect (newIntern.getName()).toBe('Jane');
})
test('testing the get id', function() {
   let newIntern = new Intern ('Jane', '123id');
   expect (newIntern.getId()).toBe('123id');
})
test('testing the get email', function() {
   let newIntern = new Intern ('Jane','123id','Jane@email.com');
   expect (newIntern.getEmail()).toBe('Jane@email.com');
})
test('testing the get school', function() {
    let newIntern = new Intern ('Jane','123id','Jane@email.com','Web School University');
    expect (newIntern.getSchool()).toBe('Web School University');
})