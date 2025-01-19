'use strict';

// write code here
const buttonTable = document.querySelectorAll('.button');
const firstRow = document.querySelector('tr');
const table = firstRow.parentElement;

buttonTable.forEach((button) => {
  const buttonClass = button.className;

  button.addEventListener('click', () => tableMethodbutton(buttonClass));
});

function tableMethodbutton(typeClass) {
  const tableRows = document.querySelectorAll('tr');

  if (typeClass.includes('append-column')) {
    tableRows.forEach((element) => {
      if (element.children.length < 10) {
        const td = document.createElement('td');

        element.appendChild(td);
      }
    });
  } else if (typeClass.includes('remove-column')) {
    tableRows.forEach((element) => {
      if (element.children.length > 2) {
        element.lastChild.remove();
      }
    });
  } else if (typeClass.includes('append-row')) {
    if (table.children.length < 10) {
      const columnTable = table.firstElementChild.cloneNode(true);

      table.appendChild(columnTable);
    }
  } else if (typeClass.includes('remove-row')) {
    if (table.children.length > 2) {
      table.lastChild.remove();
    }
  }
}
