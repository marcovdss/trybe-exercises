// EXERCICIOS 1 
//  Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days"


// let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// function createDaysOfTheMonth() {
//   let getDaysList = document.querySelector('#days');

//   for (let index = 0; index < dezDaysList.length; index += 1) {
//     let day = dezDaysList[index];
//     let dayItem = document.createElement('li');

//     if (day === 24 | day === 31) {
//       dayItem.className = 'day holiday';
//       dayItem.innerHTML = day;
//       getDaysList.appendChild(dayItem);
//     } else if (day === 4 | day === 11 | day === 18) {
//       dayItem.className = 'day friday';
//       dayItem.innerHTML = day;
//       getDaysList.appendChild(dayItem);
//     } else if (day === 25) {
//       dayItem.className = 'day holiday friday';
//       dayItem.innerHTML = day;
//       getDaysList.appendChild(dayItem);
//     } else {
//       dayItem.innerHTML = day;
//       dayItem.className = 'day';
//       getDaysList.appendChild(dayItem);
//     }
//   };
// };
// createDaysOfTheMonth();

// EXERCICIOS 2 

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

// function createHolidayButton(buttonName) {
//     let buttonContainer = document.querySelector('.buttons-container');
//     let newButton = document.createElement('button');
//     let newButtonID = 'btn-holiday';
  
//     newButton.innerHTML = buttonName;
//     newButton.id = newButtonID;
//     buttonContainer.appendChild(newButton);
//   };
  
//   createHolidayButton('Feriados');

// EXERCICIO 3 
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a 
// // cor de fundo dos dias que possuem a classe "holiday" .

// function displayHolidays() {
//     let getHolidayButton = document.querySelector('#btn-holiday');
//     let getHolidays = document.querySelectorAll('.holiday')
//     let backgroundColor = 'rgb(238,238,238)';
//     let setNewColor = 'white';
  
//     getHolidayButton.addEventListener('click', function() {
//       for (let index = 0; index < getHolidays.length; index += 1) {
//         if (getHolidays[index].style.backgroundColor === setNewColor) {
//           getHolidays[index].style.backgroundColor = backgroundColor;
//         } else {
//           getHolidays[index].style.backgroundColor = setNewColor;
//         }
//       }
//     })
//   };
  
//   displayHolidays();

// EXERCICIOS 4 
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

// function createFridayButton(buttonName) {
//     let buttonContainer = document.querySelector('.buttons-container');
//     let newButton = document.createElement('button');
//     let newButtonID = 'btn-friday';
  
//     newButton.innerHTML = buttonName;
//     newButton.id = newButtonID;
//     buttonContainer.appendChild(newButton);
//   };
  
//   createFridayButton('Sexta-feira');

// Exercício 5
// Implemente uma função que adicione ao botão "Sexta-feira" 
// um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

// function displayFridays(fridaysArray) {
//     let getFridayButton = document.querySelector('#btn-friday');
//     let fridays = document.getElementsByClassName('friday');
//     let newFridayText = 'SEXTOU o/';
  
//     getFridayButton.addEventListener('click', function() {
//     for (let index = 0; index < fridays.length; index += 1) {
//       if (fridays[index].innerHTML !== newFridayText) {
//           fridays[index].innerHTML = newFridayText;
//       } else {
//           fridays[index].innerHTML = fridaysArray[index];
//         }
//       }
//     })
//   };
  
//   let dezFridays = [ 4, 11, 18, 25 ];
//   displayFridays(dezFridays);

// Exercício 6
// Implemente duas funções que criem um efeito de "zoom". 
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, 
// quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// function dayMouseOver() {
//     let days = document.querySelector('#days');
  
//     days.addEventListener('mouseover', function(event) {
//       event.target.style.fontSize = '30px';
//       event.target.style.fontWeight = '600';
//     })
//   };
  
//   function dayMouseOut() {
//     let days = document.querySelector('#days');
  
//     days.addEventListener('mouseout', function(event) {
//       event.target.style.fontWeight = '200';
//       event.target.style.fontSize = '20px';
//     })
//   };
  
//   dayMouseOver();
//   dayMouseOut();

// Exercício 7
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. 
// A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e 
// criar dinamicamente um elemento com a tag <span> contendo a tarefa.

// function newTaskSpan(task) {

//     let tasksContainer = document.querySelector('.my-tasks');
//     let taskName = document.createElement('span');
  
//     taskName.innerHTML = task;
//     tasksContainer.appendChild(taskName);
//   };
  
//   newTaskSpan('Projeto:');

// Exercício 8
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. 
// Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

// function newTaskDiv(color) {

//     let tasksContainer = document.querySelector('.my-tasks');
//     let newTask = document.createElement('div');
  
//     newTask.className = 'task';
//     newTask.style.backgroundColor = color;
//     tasksContainer.appendChild(newTask);
//   };
  
//   newTaskDiv('green');

 // Exercício 9
// Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, 
// atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.

// function setTaskClass() {
//     let selectedTask = document.getElementsByClassName('task selected');
//     let myTasks = document.querySelector('.task');
  
//     myTasks.addEventListener('click', function(event) {
//       if (selectedTask.length === 0) {
//         event.target.className = 'task selected';
//       } else {
//         event.target.className = 'task';
//       }
//     });
//   };
  
//   setTaskClass();

 // Exercício 10
// Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, 
// atribua a este dia a cor da legenda da sua tarefa selecionada.

// function setDayColor() {
//     let selectedTask = document.getElementsByClassName('task selected');
//     let days = document.querySelector('#days');
//     let taskDiv = document.querySelector('.task');
//     let taskColor = taskDiv.style.backgroundColor;
    
//     days.addEventListener('click', function(event){
//       let eventTargetColor = event.target.style.color;
//       if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
//         let color = selectedTask[0].style.backgroundColor;
//         event.target.style.color = color;
//       } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
//         event.target.style.color = 'rgb(119,119,119)';
//       }
//     });
//   };
  
//   setDayColor();

// Bônus
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", 
// adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

// function addNewTask() {
//     let getInputField = document.querySelector('#task-input');
//     let addInputButton = document.querySelector('#btn-add');
//     let getTaskList = document.querySelector('.task-list');
  
//     addInputButton.addEventListener('click', function() {
//       if (getInputField.value.length > 0) {
//         let newLi = document.createElement('li');
//         newLi.innerText = getInputField.value;
  
//         getTaskList.appendChild(newLi);
//         getInputField.value = '';
//       } else {
//         alert('Error: Digite ao menos 1 caractere.');
//       }
//     })
  
//     getInputField.addEventListener('keyup', function(event) {
//       if (event.key === 'Enter' && getInputField.value.length > 0) {
//         let newLi = document.createElement('li');
//         newLi.innerText = getInputField.value;
  
//         getTaskList.appendChild(newLi);
//         getInputField.value = '';
//       }
//     });
//   };
  
//   addNewTask();