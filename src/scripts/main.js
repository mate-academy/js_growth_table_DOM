'use strict';

const MAX_FIELD_COMPONENTS = 10;
const MIN_FIELD_COMPONENTS = 2;

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    const field = document.querySelector('.field');
    const buttonClassList = button.classList;

    switch (true) {
      case buttonClassList.contains('append-row'):
        appendRow(field);
        break;
      case buttonClassList.contains('remove-row'):
        removeRow(field);
        break;
      case buttonClassList.contains('append-column'):
        appendColumn(field);
        break;
      case buttonClassList.contains('remove-column'):
        removeColumn(field);
        break;
    }

    updateButtonStates(field);
  }
});

function appendRow(field) {
  const lastRow = field.rows[field.rows.length - 1];
  const newRow = lastRow.cloneNode(true);

  field.appendChild(newRow);
}

function removeRow(field) {
  field.deleteRow(0);
}

function appendColumn(field) {
  const lastColumnIndex = field.rows[0].cells.length - 1;

  for (const row of field.rows) {
    const newColumn = row.cells[lastColumnIndex].cloneNode(true);

    row.appendChild(newColumn);
  }
}

function removeColumn(field) {
  for (const row of field.rows) {
    row.deleteCell(row.cells.length - 1);
  }
}

function updateButtonStates(field) {
  const rows = field.rows.length;
  const columns = field.rows[0].cells.length;

  const toggleButtonState = (button, maxCondition, minCondition) => {
    if (maxCondition) {
      button.disabled = true;
    } else if (minCondition && button.disabled) {
      button.removeAttribute('disabled');
    }
  };

  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  toggleButtonState(appendRowButton, rows >= MAX_FIELD_COMPONENTS, rows < MAX_FIELD_COMPONENTS);
  toggleButtonState(removeRowButton, rows <= MIN_FIELD_COMPONENTS, rows > MIN_FIELD_COMPONENTS);

  toggleButtonState(appendColumnButton, columns >= MAX_FIELD_COMPONENTS, columns < MAX_FIELD_COMPONENTS);
  toggleButtonState(removeColumnButton, columns <= MIN_FIELD_COMPONENTS, columns > MIN_FIELD_COMPONENTS);
}
