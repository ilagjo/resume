// CONTACT INFO
var contactInfoData = [
  {
    icon: "fa-solid fa-phone",
    text: "+39 371 3809 294",
    link: "tel:3713809294",
  },
  {
    icon: "fa-regular fa-envelope",
    text: "ilaria.clg@outlook.it",
    link: "mailto:ilaria.clg@outlook.it",
  },
  {
    icon: "fa-brands fa-github",
    text: "github.com/ilagjo",
    link: "http://github.com/ilagjo",
  },
  {
    icon: "fa-brands fa-linkedin",
    text: "linkedin.com/ilaria-clg",
    link: "http://linkedin.com/ilaria-clg",
  },
  {
    icon: "fa-solid fa-location-dot",
    text: "Sesto San Giovanni, MI",
    link: "https://maps.google.com/?q=Sesto-San-Giovanni",
  },
];

function generateContactInfo() {
  var contactList = document.getElementById("contactList");

  contactList.innerHTML = contactInfoData
    .map(function (info) {
      return `
            <li>
                <span class="icon"><i class="${info.icon}"></i></span>
                <span class="text"><a href="${info.link}">${info.text}</a></span>
            </li>
        `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", generateContactInfo);

// EDUCATION
if (document.documentElement.lang === "it") {
var educationInfoData = [
  { 
    year: "2020",
    degree: "Laurea Magistrale in Business Management e Tecnologie Digitali",
    university: "UTIU",
  },
  {
    year: "2017",
    degree: "Laurea Triennale in Ingegneria Industriale e dell'Informazione",
    university: "Politecnico di Milano",
  },
];
} else if (document.documentElement.lang === "en") {
    var educationInfoData = [
        { 
          year: "2020",
          degree: "Master Degree in Business Management and Digital Technologies",
          university: "UTIU",
        },
        {
          year: "2017",
          degree: "Bachelor Degree in Industrial and Information Engineering",
          university: "Politecnico di Milano",
        },
      ];
}

function generateEducationInfo() {
  var educationList = document.getElementById("educationList");

  educationList.innerHTML = educationInfoData
    .map(function (info) {
      return `
            <li>
                <h5>${info.year}</h5>
                <h4>${info.degree}</h4>
                <h4>${info.university}</h4>
            </li>
        `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", generateEducationInfo);

//EXPERIENCES
let experiencesData;
if (document.documentElement.lang === "it") 
{ experiencesData = [
    { year: '2023', company: 'Blazar Group', title: '.NET Full-Stack Academy', description: 'Selezionata per un programma di formazione in una Academy aziendale. Acquisite conoscenze lato back-end e front-end; svolti progetti pratici per migliorare il team working, la gestione del tempo e la produttività.', skills: ['.NET', 'C#', 'SQL Server Management Studio', 'Visual Studio e Visual Studio Code', 'Git', 'HTML', 'CSS', 'JavaScript', 'Angular', 'React', 'Material UI'] },
    { year: '2022', company: 'Lacerba.io', title: 'Percorso Front-End Development', description: 'Partecipante con borsa di studio post test attitudinale di selezione. Acquisiti i fondamenti e una prima esperienza pratica nello sviluppo front-end con progressivi gradi di approfondimento.', skills: ['HTML', 'CSS e SCSS', 'Bootstrap', 'JavaScript', 'jQuery', 'React', 'Wordpress', 'UX/UI fundamentals', 'SEO fundamentals'] }
];
} else if (document.documentElement.lang === "en") {
    experiencesData = [
        { year: '2023', company: 'Blazar Group', title: '.NET Full-Stack Academy Attendee', description: 'Participated in an IT company\'s academy program, gaining knowledge of both back-end and front-end development. Completed hands-on projects to enhance team collaboration, time-management, and productivity skills.', skills: ['.NET', 'C#', 'SQL Server Management Studio', 'Visual Studio and Visual Studio Code', 'Git', 'HTML', 'CSS', 'JavaScript', 'Angular', 'React', 'Material UI'] },
        { year: '2022', company: 'Lacerba.io', title: 'Front-End Developer Certificate', description: 'Received a scholarship for a training course based on the results of a selective attitudinal test. Gained fundamental knowledge and practical experience in front-end development through progressively deeper insights and projects.', skills: ['HTML', 'CSS and SCSS', 'Bootstrap', 'JavaScript', 'jQuery', 'React', 'Wordpress', 'UX/UI fundamentals', 'SEO fundamentals'] }
    ];
}

const generateExperienceElements = () => {
    const experiencesContainer = document.querySelector('.about.experiences');

    experiencesData.map(experience => {
        const box = document.createElement('div');
        box.classList.add('box');

        const { year, company, title, description, skills } = experience;

        const yearCompanyHTML = `<div class="year"><h5>${year}</h5><h5>${company}</h5></div>`;
        const textHTML = `<div class="text"><h4>${title}</h4><p>${description}</p><div class="details"><ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul></div></div>`;
        
        box.innerHTML = `${yearCompanyHTML}${textHTML}`;

        experiencesContainer.appendChild(box);
    });
};

document.addEventListener('DOMContentLoaded', generateExperienceElements);


// SKILLS
var skillsData = [
  { name: "Html", percentage: "100%" },
  { name: "css", percentage: "90%" },
  { name: "javascript", percentage: "85%" },
  { name: "Angular", percentage: "68%" },
  { name: "React.js", percentage: "64%" },
  { name: "C#", percentage: "50%" },
];

function generateSkills() {
  var skillsSection = document.querySelector(".about.skills");

  skillsSection.innerHTML = `
        <h2 class="title2">Skills</h2>
        ${skillsData
          .map(
            (skill) => `
            <div class="box">
                <h4>${skill.name}</h4>
                <div class="percent">
                    <div style="width: ${skill.percentage}"></div>
                </div>
            </div>
        `
          )
          .join("")}
    `;
}

document.addEventListener("DOMContentLoaded", generateSkills);

// AGGIORNAMENTO DATA ODIERNA
const today = new Date();
const year = today.getFullYear();
let month;
if (document.documentElement.lang === "it") {
  month = new Intl.DateTimeFormat("it", { month: "long" }).format(today);
} else if (document.documentElement.lang === "en") {
  month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(today);
}
const yearMonthString = month + " " + year;

document.getElementById("date").textContent = yearMonthString;
