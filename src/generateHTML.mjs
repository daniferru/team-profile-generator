const generateCards = (employees) => {
    const cards = employees.map((employees) => {
        let roleInput;
        let iconRole;
        switch (employees.getRole()) {
            case 'SoftwareDeveloper':
                roleInput = `GitHub: <a href="https://github.com/${employees.getGithub()}" target="_blank">${employees.getGithub()}</a>`;
                iconRole = `<i class="material-icons">laptop_mac</i>`;
                break;
            case 'ScrumMaster':
                roleInput = `GitHub: <a href="https://github.com/${employees.getGithub()}" target="_blank">${employees.getGithub()}</a>`;
                iconRole = `<i class="material-icons">laptop_mac</i>`;
                break;
            case 'QA Engineer':
                roleInput = `GitHub: <a href="https://github.com/${employees.getGithub()}" target="_blank">${employees.getGithub()}</a>`;
                iconRole = `<i class="material-icons">laptop_mac</i>`;
                break;
            case 'Project Manager':
                roleInput = `Office Number: ${employees.getOfficeNumber()}`;
                iconRole = `<i class="material-icons">content_paste</i>`;
                break;
            case 'Intern':
                roleInput = `GitHub: <a href="https://github.com/${employees.getGithub()}" target="_blank">${employees.getGithub()}</a>`;
                roleInput = `School: ${employees.getSchool()}`;
                iconRole = `<i class="material-icons">assignment_ind</i>`;
                break;
                default:
                    roleInput = '';
                    iconRole = '';
        }
        return `
        <div class="container">
            <div class="card-header">
                <h2>${employees.getName()}</h2>
                <h3>${employees.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul>
                <li>ID: ${employees.getId()}</li>
                <li>Email: <a href="mailto:${employees.getEmail()}">${employees.getEmail()}</a></li>
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
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Creepster&family=Poltawski+Nowy&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-WarBPW8Vv1CKR6hjmiTKMZ1U6yROU6y61cKhj5mYB/Fk5BILW5ZzG7Mg9jK/9Hb3qyhxntM7AfNzZGp+j8V+bg==" crossorigin="anonymous" referrerpolicy="no-referrer">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="../output/style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <nav class="navbar">Team Profile</nav>
        </header>
        <main class="box">
            <div class="container"
                ${generateCards(employees)}
            </div>
        </main>
    </body>
</html>
    `;
    return html;
};

export default generateHTML;