// INFORMAZIONI DI CONTATTO
var contactInfoData = [
    { icon: 'fa-solid fa-phone', text: '+39 371 3809 294', link: 'tel:3713809294' },
    { icon: 'fa-regular fa-envelope', text: 'ilaria.clg@outlook.it', link: 'mailto:ilaria.clg@outlook.it' },
    { icon: 'fa-brands fa-github', text: 'github.com/ilagjo', link: 'http://github.com/ilagjo' },
    { icon: 'fa-brands fa-linkedin', text: 'linkedin.com/ilaria-clg', link: 'http://linkedin.com/ilaria-clg' },
    { icon: 'fa-solid fa-location-dot', text: 'Sesto San Giovanni, MI', link: 'https://maps.google.com/?q=Sesto-San-Giovanni' }
];


function generateContactInfo() {
    var contactList = document.getElementById('contactList');

    contactList.innerHTML = contactInfoData.map(function (info) {
        return `
            <li>
                <span class="icon"><i class="${info.icon}"></i></span>
                <span class="text"><a href="${info.link}">${info.text}</a></span>
            </li>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', generateContactInfo);


// DATI ISTRUZIONE
var educationInfoData = [
    { year: '2020', degree: 'Laurea Magistrale in Business Management e Tecnologie Digitali', university: 'UTIU' },
    { year: '2017', degree: 'Laurea Triennale in Ingegneria dell\'Informazione, corso Gestionale', university: 'Politecnico di Milano' }
];

function generateEducationInfo() {
    var educationList = document.getElementById('educationList');

    educationList.innerHTML = educationInfoData.map(function (info) {
        return `
            <li>
                <h5>${info.year}</h5>
                <h4>${info.degree}</h4>
                <h4>${info.university}</h4>
            </li>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', generateEducationInfo);


// SKILLS
var skillsData = [
    { name: 'Html', percentage: '100%' },
    { name: 'css', percentage: '90%' },
    { name: 'javascript', percentage: '85%' },
    { name: 'Angular', percentage: '68%' },
    { name: 'React.js', percentage: '64%' },
    { name: 'C#', percentage: '50%' }
];

function generateSkills() {
    var skillsSection = document.querySelector('.about.skills');

    skillsSection.innerHTML = `
        <h2 class="title2">Skills</h2>
        ${skillsData.map(skill => `
            <div class="box">
                <h4>${skill.name}</h4>
                <div class="percent">
                    <div style="width: ${skill.percentage}"></div>
                </div>
            </div>
        `).join('')}
    `;
}

document.addEventListener('DOMContentLoaded', generateSkills);


// AGGIORNAMENTO DATA ODIERNA
const today = new Date();
const year = today.getFullYear();
const month = new Intl.DateTimeFormat('it', { month: 'long' }).format(today);
const yearMonthString = month + ' ' + year;

document.getElementById("date").textContent = yearMonthString;

