const QAEngineer = require('../lib/QAengineer');

test('creates a QAEngineer object', () => {
    const QAengineer = new QAEngineer('Sam', 1, 'sam@devteam.com');

    expect(QAengineer.name).toEqual(expect.any(String));
    expect(QAengineer.id).toEqual(expect.any(Number));
    expect(QAengineer.email).toEqual(expect.any(String));
});

test('gets QA engineers name', () => {
    const QAengineer = new QAEngineer('Sam', 1, 'sam@devteam.com');

    expect(QAengineer.getName()).toEqual(expect.any(String));
});
test('gets QA engineers ID', () => {
    const QAengineer = new QAEngineer('Sam', 1, 'sam@devteam.com');

    expect(QAengineer.getId()).toEqual(expect.any(Number));
});
test('gets QA engineers email', () => {
    const QAengineer = new QAEngineer('Sam', 1, 'sam@devteam.com');

    expect(QAengineer.getEmail()).toEqual(expect.any(String));
});
test('gets QA engineers role', () => {
    const QAengineer = new QAEngineer('Sam', 1, 'sam@devteam.com');

    expect(QAengineer.getRole()).toBe("QA Engineer");
});