const today = new Date();
const year = today.getFullYear();
const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(today);
const yearMonthString = month + ' ' + year;

document.getElementById("date").textContent = yearMonthString;

