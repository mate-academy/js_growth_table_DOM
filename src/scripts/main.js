'use strict';

const container = document.querySelector('.container');
const field = container.querySelector('.field');
const rows = field.rows;

const buttons = {
  addRowButton: document.querySelector('.append-row'),
  removeRowButton: document.querySelector('.remove-row'),
  addColumn: document.querySelector('.append-column'),
  removeColumnButton: document.querySelector('.remove-column'),
};

const updateButtonsStates = () => {
  const rowCount = rows.length;
  const colCount = rows[0].cells.length;

  buttons.addRowButton.disabled = rowCount >= 10;
  buttons.removeRowButton.disabled = rowCount <= 2;
  buttons.addColumn.disabled = colCount >= 10;
  buttons.removeColumnButton.disabled = colCount <= 2;
};

container.addEventListener('click', (ev) => {
  const tBody = field.tBodies[0];

  switch (ev.target) {
    case buttons.addRowButton:
      tBody.append(rows[0].cloneNode(true));
      break;

    case buttons.removeRowButton:
      tBody.lastElementChild.remove();
      break;

    case buttons.addColumn:
      [...rows].forEach((row) => row.append(document.createElement('td')));
      break;

    case buttons.removeColumnButton:
      [...rows].forEach((row) => row.lastElementChild.remove());
  }

  updateButtonsStates();
});
