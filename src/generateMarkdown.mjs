function generateMarkdown(teams) {
    const html = `
    <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Creepster&family=Poltawski+Nowy&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../output/style.css">
    <title>Team Profile</title>
  </head>
  
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
      ${generateCards(teams)}
    </main>
  </body>
  
  </html>
  `;
  return html;
}

function generateCards(teams) {
    let cards = "";
    for (let i = 0; i <teams.length; i++) {
        cards += `
        <section>
            <h2>${teams[i].name}</h2>
            <h3>${teams[i].getRole()}</h3>
            <ul>
              <li>ID: ${teams[i].id}</li>
              <li>Email: <a href="mailto:${teams[i].email}">${teams[i].email}</a></li>
            `;
        if (teams[i].getRole() === "Software Developer") {
            cards += `
            <li>GitHub: <a href="https://github.com/${teams[i].github}" target="_blank">${teams[i].github}</a></li>
            `;
        }
        else if (teams[i].getRole() === "Scrum Master") {
            cards += `
            <li>GitHub: <a href="https://github.com/${teams[i].github}" target="_blank">${teams[i].github}</a></li>
            `;
        }
        else if (teams[i].getRole() === "QA Engineer") {
            cards += `
            <li>GitHub: <a href="https://github.com/${teams[i].github}" target="_blank">${teams[i].github}</a></li>
            `;
        }
        else if (teams[i].getRole() === "Project Manager") {
            cards += `
            <li>Office Number: ${teams[i].officeNumber}
            `;
        }
        else if (teams[i].getRole() === "Intern") {
            cards =+ `
            <li>School: ${teams[i].school}
            `;
        }
        cards += `
            </ul>
        </section>
        `;
    }
    return cards;
}

export { generateMarkdown, generateCards };