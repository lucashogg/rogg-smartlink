const date = document.querySelector('#date');

const currentDate = new Date();
const year = currentDate.getFullYear();

date.innerText = year;