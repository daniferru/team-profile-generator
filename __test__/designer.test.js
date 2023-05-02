const Designer = require('../lib/designer');

test('creates a Designer object', () => {
    const designer = new Designer('Vince', 0, 'vince@devteam.com', 'vincegithub');

    expect(designer.name).toEqual(expect.any(String));
    expect(designer.id).toEqual(expect.any(Number));
    expect(designer.email).toEqual(expect.any(String));
    expect(designer.github).toEqual(expect.any(String));
});

test('gets designers name', () => {
    const designer = new Designer('Vince', 0, 'vince@devteam.com', 'vincegithub');

        expect(designer.getName()).toEqual(expect.any(String));
});
test('gets designers ID', () => {
    const designer = new Designer('Vince', 0, 'vince@devteam.com', 'vincegithub');

        expect(designer.getId()).toEqual(expect.any(Number));
});
test('gets designers email', () => {
    const designer = new Designer('Vince', 0, 'vince@devteam.com', 'vincegithub');

        expect(designer.getEmail()).toEqual(expect.any(String));
});
test('gets designers GitHub username', () => {
    const designer = new Designer('Vince', 0, 'vince@devteam.com', 'vincegithub');

        expect(designer.getGithub()).toEqual(expect.any(String));
});
test('gets designers role', () => {
    const designer = new Designer('Vince', 0, 'vince@devteam.com', 'vincegithub');

        expect(designer.getRole()).toBe("UX/UI Designer");
});