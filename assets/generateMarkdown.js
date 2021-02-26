function generateMarkdown(data) {
  return `# ${data.Title}

## Table of Contents

* [About-project](#Description)
* [Video](#Video)
* [Picture1](#Picture1)
* [Picture2](#Picture2)
* [Instalation](#Instalation)
* [License](#License)
* [Contributor](#Contributor)
* [Email-adress](#Email)
* [LinkedIn-profile](#LinkedIn-profile)
* [GitHub-profile](#GitHub-profile)
* [LGitHub-Yo)](#GitHub-Yo)


   
### About the project:
${data.Description}

### Video:
${data.Video}

### Picture:
${data.Picture1} 

### Picture:
${data.Picture2} 

### Instalation:
${data.instalation}    

### License:
${data.license}

### Contributor:
${data.Contributor}

### Email adress:
${data.email}

### LinkedIn profile:
${data.LinkedIn}

### GitHub profile:
${data.GitHub}

### GitHub Yo:
${data.GitHubYo}
`;
}

module.exports = generateMarkdown;
