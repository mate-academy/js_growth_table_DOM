'use strict';

const rows = document.body.querySelectorAll('tr');
let rowsNumber = [ ...rows ].length;
let columnsNumber = rows[0].cells.length;
const buttons = [ ...document.body.querySelectorAll('button') ];
const table = document.querySelector('table');

buttons.forEach(button => button.addEventListener('click', (e) => {
  if (e.target.classList.contains('append-row')) {
    rowsNumber++;
    document.querySelector('.remove-row').disabled = false;
    table.append(table.rows[0].cloneNode(true));

    if (rowsNumber === 10) {
      button.disabled = true;
    }
  }

  if (e.target.classList.contains('remove-row')) {
    rowsNumber--;
    document.querySelector('.append-row').disabled = false;
    table.rows[0].remove();

    if (rowsNumber === 2) {
      button.disabled = true;
    }
  }

  if (e.target.classList.contains('append-column')) {
    columnsNumber++;
    document.querySelector('.remove-column').disabled = false;

    const cell = document.createElement('td');

    [ ...document.body.querySelectorAll('tr') ]
      .forEach(row => row.append(cell.cloneNode(true)));

    if (columnsNumber === 10) {
      button.disabled = true;
    }
  }

  if (e.target.classList.contains('remove-column')) {
    columnsNumber--;
    document.querySelector('.append-column').disabled = false;

    [ ...document.body.querySelectorAll('tr') ]
      .forEach(row => row.cells[0].remove());

    if (columnsNumber === 2) {
      button.disabled = true;
    }
  }
}));
