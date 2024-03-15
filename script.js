// INFORMAZIONI DI CONTATTO
var contactInfoData = [
    { icon: 'fa-solid fa-phone', text: '+39 371 3809 294', link: 'tel:3713809294' },
    { icon: 'fa-regular fa-envelope', text: 'ilaria.clg@outlook.it', link: 'mailto:ilaria.clg@outlook.it' },
    { icon: 'fa-brands fa-github', text: 'github.com/ilagjo', link: 'http://github.com/ilagjo' },
    { icon: 'fa-brands fa-linkedin', text: 'linkedin.com/ilaria-clg', link: 'http://linkedin.com/ilaria-clg' },
    { icon: 'fa-solid fa-location-dot', text: 'Milan, Italy', link: 'https://maps.google.com/?q=Milan' }
];


function generateContactInfo() {
    var contactList = document.getElementById('contactList');

    contactInfoData.forEach(function (info) {
        var listItem = document.createElement('li');
        var iconSpan = document.createElement('span');
        var textSpan = document.createElement('span');
        var link = document.createElement('a');
        
        iconSpan.classList.add('icon');
        iconSpan.innerHTML = '<i class="' + info.icon + '"></i>';

        link.textContent = info.text;
        link.href = info.link;
        textSpan.classList.add('text');
        textSpan.appendChild(link);

        listItem.appendChild(iconSpan);
        listItem.appendChild(textSpan);
        contactList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', generateContactInfo);


// DATI ISTRUZIONE
var educationInfoData = [
    { year: '2020', degree: 'Master Degree in Business Management and Digital Technologies', university: 'UTIU' },
    { year: '2017', degree: 'Bachelor Degree in Management and Production Engineering', university: 'Politecnico di Milano' }
];

function generateEducationInfo() {
    var educationList = document.getElementById('educationList');

    educationInfoData.forEach(function (info) {
        var listItem = document.createElement('li');
        var yearHeading = document.createElement('h5');
        var degreeHeading = document.createElement('h4');
        var universityHeading = document.createElement('h4');

        yearHeading.textContent = info.year;
        degreeHeading.textContent = info.degree;
        universityHeading.textContent = info.university;

        listItem.appendChild(yearHeading);
        listItem.appendChild(degreeHeading);
        listItem.appendChild(universityHeading);
        educationList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', generateEducationInfo);



// AGGIORNAMENTO

const today = new Date();
const year = today.getFullYear();
const month = new Intl.DateTimeFormat('it', { month: 'long' }).format(today);
const yearMonthString = month + ' ' + year;

document.getElementById("date").textContent = yearMonthString;

