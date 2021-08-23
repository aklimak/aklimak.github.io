function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // ex 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function calendarDays() {
    let getDaysList = document.getElementById('days')
    for (let i = 0; i < dezDaysList.length; i += 1) {
        let day = dezDaysList[i];
        let dayItem = document.createElement('li');
        dayItem.innerText = day;
        getDaysList.appendChild(dayItem);

        if (day === 24 || day === 25 || day === 31) {
            dayItem.className = 'day holyday';
        } else if (day === 4 || day === 11 || day === 18 || day === 25){
            dayItem.className = 'day friday';
        } else {
            dayItem.className = 'day';
        }
    }
}
calendarDays();

// ex 2
function holydayButton(buttonName) {
    let buttonContainer = document.getElementsByClassName('buttons-container')[0];
    let newButton = document.createElement('button');
    newButton.id = 'btn-holiday';
    newButton.innerHTML = buttonName;
    buttonContainer.appendChild(newButton);
}
holydayButton('Feriados');

// ex 3
function holydayColor();
    addEventListener('click', holydayColor())
    

 