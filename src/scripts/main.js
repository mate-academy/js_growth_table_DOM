'use strict';

const field = document.querySelector('.field').children[0];
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonType = button.classList[0];

    switch (buttonType) {
      case 'append-row':
        appendRow();
        break;

      case 'remove-row':
        removeRow();
        break;

      case 'append-column':
        appendColumn();
        break;

      case 'remove-column':
        removeColumn();
        break;

      default:
        break;
    }

    updateButtonsState();
  });
});

function updateButtonsState() {
  const rowLength = field.rows[0].cells.length;

  if (field.rows.length >= 10) {
    buttons[0].disabled = true;
  } else {
    buttons[0].disabled = false;
  }

  if (field.rows.length <= 2) {
    buttons[1].disabled = true;
  } else {
    buttons[1].disabled = false;
  }

  if (rowLength >= 10) {
    buttons[2].disabled = true;
  } else {
    buttons[2].disabled = false;
  }

  if (rowLength <= 2) {
    buttons[3].disabled = true;
  } else {
    buttons[3].disabled = false;
  }
}

function appendRow() {
  const newRow = document.createElement('tr');
  const rowLength = field.rows[0].cells.length;

  for (let i = 0; i < rowLength; i++) {
    const cell = document.createElement('td');

    newRow.append(cell);
  }

  field.append(newRow);
}

function removeRow() {
  field.lastElementChild.remove();
}

function appendColumn() {
  Array.from(field.rows).forEach(row => {
    const cell = document.createElement('td');

    row.append(cell);
  });
}

function removeColumn() {
  Array.from(field.rows).forEach(row => {
    row.lastElementChild.remove();
  });
}
