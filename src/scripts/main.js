'use strict';

const TABLE_MAX_COUNT_LENGTH = 10;
const TABLE_MIN_COUNT_LENGTH = 2;

const buttons = document.querySelectorAll('.button');
const table = document.querySelector('.field');
const rows = table.getElementsByTagName('tr');
const columns = rows[0].getElementsByTagName('td');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    modifyTable(button.classList[0]);
  });
});

function modifyTable(action) {
  const targetButton
    = [...buttons].find(button => button.classList.contains(action));

  switch (action) {
    case 'append-row':
      table.append(rows[0].cloneNode(true));
      targetButton.disabled = rows.length >= TABLE_MAX_COUNT_LENGTH;
      break;

    case 'remove-row':
      rows[rows.length - 1].remove();
      targetButton.disabled = rows.length <= TABLE_MIN_COUNT_LENGTH;
      break;

    case 'append-column':
      [...rows].forEach(row => row.append(columns[0].cloneNode(true)));
      targetButton.disabled = columns.length >= TABLE_MAX_COUNT_LENGTH;
      break;

    case 'remove-column':
      [...rows].forEach(row => row.children[columns.length - 1].remove());
      targetButton.disabled = columns.length <= TABLE_MIN_COUNT_LENGTH;
      break;

    default:
      break;
  }
}
