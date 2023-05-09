const Employee = require('../lib/employee');

test('creates an Employee object', () => {
  const employee = new Employee('Ezra', 1, 'ezra@devteam.com');

  expect(employee.name).toBe('Ezra');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
  const employee = new Employee('Ezra', 1, 'ezra@devteam.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

test("gets employee's ID", () => {
  const employee = new Employee('Ezra', 1, 'ezra@devteam.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
  const employee = new Employee('Ezra', 1, 'ezra@devteam.com');

  expect(employee.getEmail()).toEqual(expect.any(String));
});

test("gets employee's role", () => {
  const employee = new Employee('Ezra', 1, 'ezra@devteam.com');

  expect(employee.getEmail()).toEqual(expect.any(String));
});