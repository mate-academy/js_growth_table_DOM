'use strict';

const field = document.querySelector('tbody');
const buttonContainer = document.querySelector('.container');
const appRow = document.querySelector('.append-row');
const remRow = document.querySelector('.remove-row');
const appCol = document.querySelector('.append-column');
const remCol = document.querySelector('.remove-column');
const buttons = {
  'append-row button': remRow,
  'remove-row button': appRow,
  'append-column button': remCol,
  'remove-column button': appCol,
};
const minValue = 2;
const maxValue = 10;

buttonContainer.addEventListener('click', (ev) => {
  const button = ev.target.closest('.button');

  if (!button) {
    return;
  }

  if (button.className.includes('row')) {
    moveRows(button);
  } else {
    moveColumns(button);
  }
});

function moveRows(button) {
  let rowsLength = field.rows.length;

  if (button === appRow && rowsLength < maxValue) {
    field.append(field.rows[0].cloneNode(true));
    rowsLength = field.rows.length;
  }

  if (button === remRow && rowsLength > minValue) {
    field.rows[rowsLength - 1].remove();
    rowsLength = field.rows.length;
  }
  switchButtons(rowsLength, button);
}

function moveColumns(button) {
  let columnLength = field.rows[0].cells.length;

  if (button === appCol && columnLength < maxValue) {
    [...field.rows].forEach(row => {
      const td = document.createElement('td');

      row.append(td);
    });
    columnLength = field.rows[0].cells.length;
  }

  if (button === remCol && columnLength > minValue) {
    [...field.rows].forEach(row => {
      row.cells[columnLength - 1].remove();
    });
    columnLength = field.rows[0].cells.length;
  }
  switchButtons(columnLength, button);
}

function switchButtons(size, button) {
  if (size === maxValue || size === minValue) {
    button.disabled = true;
  } else {
    buttons[button.className].disabled = false;
  }
}
