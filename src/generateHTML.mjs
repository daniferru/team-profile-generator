const generateCards = (employees) => {
    const cards = employees.map((employees) => {
        let roleInput;
        switch (employees.getRole()) {
            case 'SoftwareDeveloper':
                roleInput = 'GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>';
                break;
            case 'ScrumMaster':
                roleInput = 'GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>';
                break;
            case 'QA Engineer':
                roleInput = 'GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>';
                break;
            case 'Designer':
                roleInput = 'GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>';
                break;
                default:
                    roleInput = '';
        }
        return `
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                <h2>${employee.getName()}</h2>
                <h3>${employee.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul>
                <li>ID: ${team[i].id}</li>
                <li>Email: <a href="mailto:${team[i].getEmail}">${team[i].getEmail}</a></li>
                <li>${roleInput}</li>
                </ul>
            </div>
        </div>
        `;
    });
    return cards.join('');
};

const generateHTML = (employees) => {
    const html = `
    <!DOCTYPE html>
    <html lang="eng">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Creepster&family=Poltawski+Nowy&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./assets/style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 hq w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
            </header>
        <main>
            <div class="container"
                <div class="row justify-content-center" id="team-cards">
                ${generateCards(employees)}
                </div>
            </div>
        </main>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    </html>
    `;
    return html;
};

export default generateHTML;