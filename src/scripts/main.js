'use strict';

// write code here

const table = document.querySelector('.field > tbody');
const minLength = 2;
const maxLength = 10;
const buttonClasses = [
  'append-row',
  'append-column',
  'remove-row',
  'remove-column',
];

function modifyColumns(buttonType) {
  switch (buttonType) {
    case 'append-row':
      table.appendChild(table.querySelector('tr').cloneNode(true));
      break;
    case 'remove-row':
      table.deleteRow(table.rows.length - 1);
      break;
    case 'append-column':
      [...table.rows].forEach((row) => {
        row.appendChild(row.cells[row.cells.length - 1].cloneNode(true));
      });
      break;
    case 'remove-column':
      [...table.rows].forEach((row) => {
        row.removeChild(row.cells[row.cells.length - 1]);
      });
      break;
    default:
      throw new Error('Unknown button pressed!');
  }
}

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('button')) {
    return;
  }

  if (e.target.disabled) {
    return;
  }

  const currentButton = [...e.target.classList].find((classes) => {
    return buttonClasses.includes(classes);
  });

  modifyColumns(currentButton);

  checkLength();
});

function checkLength() {
  const rowLength = table.rows.length;
  const colLength = table.rows[0].cells.length;

  document.querySelector('.append-row').disabled = rowLength >= maxLength;
  document.querySelector('.remove-row').disabled = rowLength <= minLength;
  document.querySelector('.append-column').disabled = colLength >= maxLength;
  document.querySelector('.remove-column').disabled = colLength <= minLength;
}
