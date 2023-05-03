const ProjectManager = require('../lib/projectmanager');

test('creates a ProjectManager object', () => {
    const projectManager = new ProjectManager('Brian', 1, 'brian@devteam.com', '118');

    expect(projectManager.name).toEqual(expect.any(String));
    expect(projectManager.id).toEqual(expect.any(Number));
    expect(projectManager.email).toEqual(expect.any(String));
    expect(projectManager.getOfficeNumber).toEqual(expect.any(String));
});

test('gets project managers name', () => {
    const projectManager = new ProjectManager('Brian', 1, 'brian@devteam.com', '118');

    expect(projectManager.getName()).toEqual(expect.any(String));
});

test('gets project managers ID', () => {
    const projectManager = new ProjectManager('Brian', 1, 'brian@devteam.com', '118');

    expect(projectManager.getId()).toEqual(expect.any(Number));
});

test('gets project managers email', () => {
    const projectManager = new ProjectManager('Brian', 1, 'brian@devteam.com', '118');

    expect(projectManager.getEmail()).toEqual(expect.any(String));
});

test('gets project managers office number', () => {
    const projectManager = new ProjectManager('Brian', 1, 'brian@devteam.com', '118');
  
    expect(projectManager.getOfficeNumber()).toEqual(expect.any(String));
  });

test('gets project managers role', () => {
    const projectManager = new ProjectManager('Brian', 1, 'brian@devteam.com', '118');

    expect(projectManager.getRole()).toBe("Project Manager");
});