const SoftwareDeveloper = require('../lib/softwaredeveloper');

test('creates a SoftwareDeveloper object', () => {
    const softwareDeveloper = new SoftwareDeveloper('Alex', 1, 'alex@devteam.com', 'alexgithub');

    expect(softwareDeveloper.name).toEqual(expect.any(String));
    expect(softwareDeveloper.id).toEqual(expect.any(Number));
    expect(softwareDeveloper.email).toEqual(expect.any(String));
    expect(softwareDeveloper.github).toEqual(expect.any(String));
});

test('gets software developers name', () => {
    const softwareDeveloper = new SoftwareDeveloper('Alex', 1, 'alex@devteam.com', 'alexgithub');

    expect(softwareDeveloper.getName()).toEqual(expect.any(String));
});
test('gets software developers ID', () => {
    const softwareDeveloper = new SoftwareDeveloper('Alex', 1, 'alex@devteam.com', 'alexgithub');

    expect(softwareDeveloper.getId()).toEqual(expect.any(Number));
});
test('gets software developers email', () => {
    const softwareDeveloper = new SoftwareDeveloper('Alex', 1, 'alex@devteam.com', 'alexgithub');

    expect(softwareDeveloper.getEmail()).toEqual(expect.any(String));
});
test('gets software developers GitHub username', () => {
    const softwareDeveloper = new SoftwareDeveloper('Alex', 1, 'alex@devteam.com', 'alexgithub');

    expect(softwareDeveloper.getGithub()).toEqual(expect.any(String));
});
test('gets software developers role', () => {
    const softwareDeveloper = new SoftwareDeveloper('Alex', 1, 'alex@devteam.com', 'alexgithub');

    expect(softwareDeveloper.getRole()).toBe("Software Developer");
});