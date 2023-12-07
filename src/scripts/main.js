'use strict';

const TABLE_MAX_COUNT_LENGTH = 10;
const TABLE_MIN_COUNT_LENGTH = 2;

const buttons = {
  appendRowButton: document.querySelector('.append-row'),
  removeRowButton: document.querySelector('.remove-row'),
  appendColumnButton: document.querySelector('.append-column'),
  removeColumnButton: document.querySelector('.remove-column'),
};

const table = document.querySelector('.field');
const rows = table.getElementsByTagName('tr');
const columns = rows[0].getElementsByTagName('td');

Object.keys(buttons).forEach(buttonKey => {
  const targetButton = buttons[buttonKey];

  targetButton.addEventListener('click', () => {
    modifyTable(targetButton);
    isButtonDisabled();
  });
});

function modifyTable(targetButton) {
  const action = targetButton.classList[0];

  switch (action) {
    case 'append-row':
      table.append(rows[0].cloneNode(true));
      break;

    case 'remove-row':
      rows[rows.length - 1].remove();
      break;

    case 'append-column':
      [...rows].forEach(row => row.append(columns[0].cloneNode(true)));
      break;

    case 'remove-column':
      [...rows].forEach(row => row.children[columns.length - 1].remove());
      break;

    default:
      break;
  }
}

function isButtonDisabled() {
  buttons.appendRowButton.disabled = rows.length >= TABLE_MAX_COUNT_LENGTH;
  buttons.removeRowButton.disabled = rows.length <= TABLE_MIN_COUNT_LENGTH;

  buttons.appendColumnButton.disabled
    = columns.length >= TABLE_MAX_COUNT_LENGTH;

  buttons.removeColumnButton.disabled
    = columns.length <= TABLE_MIN_COUNT_LENGTH;
};
