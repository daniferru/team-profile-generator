const Intern = require('../lib/intern');

test('creates a Intern object', () => {
    const intern = new Intern('Vince', 0, 'vince@devteam.com', 'vincegithub', 'UCI');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.github).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets interns name', () => {
    const intern = new Intern('Vince', 0, 'vince@devteam.com', 'vincegithub', 'UCI');

        expect(intern.getName()).toEqual(expect.any(String));
});
test('gets interns ID', () => {
    const intern = new Intern('Vince', 0, 'vince@devteam.com', 'vincegithub', 'UCI');

        expect(intern.getId()).toEqual(expect.any(Number));
});
test('gets interns email', () => {
    const intern = new Intern('Vince', 0, 'vince@devteam.com', 'vincegithub', 'UCI');

        expect(intern.getEmail()).toEqual(expect.any(String));
});
test('gets interns GitHub username', () => {
    const intern = new Intern('Vince', 0, 'vince@devteam.com', 'vincegithub', 'UCI');

        expect(intern.getGithub()).toEqual(expect.any(String));
});
test('gets interns school', () => {
    const intern = new Intern('Vince', 0, 'vince@devteam.com', 'vincegithub', 'UCI');

        expect(intern.getSchool()).toEqual(expect.any(String));
});
test('gets interns role', () => {
    const intern = new Intern('Vince', 0, 'vince@devteam.com', 'vincegithub', 'UCI');

        expect(intern.getRole()).toBe("Intern");
});