const ScrumMaster = require('../lib/scrummaster');

test('creates a ScrumMaster object', () => {
    const scrumMaster = new ScrumMaster('Daniel', 0, 'daniel@devteam.com', 'danielgithub');

    expect(scrumMaster.name).toEqual(expect.any(String));
    expect(scrumMaster.id).toEqual(expect.any(Number));
    expect(scrumMaster.email).toEqual(expect.any(String));
    expect(scrumMaster.github).toEqual(expect.any(String));
});

test('gets srum masters name', () => {
    const scrumMaster = new ScrumMaster('Daniel', 0, 'daniel@devteam.com', 'danielgithub');

        expect(scrumMaster.getName()).toEqual(expect.any(String));
});
test('gets srum masters ID', () => {
    const scrumMaster = new ScrumMaster('Daniel', 0, 'daniel@devteam.com', 'danielgithub');

        expect(scrumMaster.getId()).toEqual(expect.any(Number));
});
test('gets srum masters email', () => {
    const scrumMaster = new ScrumMaster('Daniel', 0, 'daniel@devteam.com', 'danielgithub');

        expect(scrumMaster.getEmail()).toEqual(expect.any(String));
});
test('gets srum masters GitHub username', () => {
    const scrumMaster = new ScrumMaster('Daniel', 0, 'daniel@devteam.com', 'danielgithub');

        expect(scrumMaster.getGithub()).toEqual(expect.any(String));
});
test('gets srum masters role', () => {
    const scrumMaster = new ScrumMaster('Daniel', 0, 'daniel@devteam.com', 'danielgithub');

        expect(scrumMaster.getRole()).toBe("Scrum Master");
});