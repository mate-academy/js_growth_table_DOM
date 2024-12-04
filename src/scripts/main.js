'use strict';

const container = document.querySelector('.container');
const field = document.querySelector('.field');
const fieldBody = field.tBodies[0];

container.addEventListener('click', handleFieldControls);

function handleFieldControls(e) {
  const button = e.target;

  if (button.tagName !== 'BUTTON') {
    return;
  }

  const isRowControl =
    button.classList.contains('append-row') ||
    button.classList.contains('remove-row');

  const isColumnControl =
    button.classList.contains('append-column') ||
    button.classList.contains('remove-column');

  if (isRowControl) {
    handleRows(button);
  }

  if (isColumnControl) {
    handleColumns(button);
  }

  updateButtonStates();
}

function handleRows(button) {
  if (button.classList.contains('append-row') && fieldBody.rows.length < 10) {
    const newRow = fieldBody.rows[0].cloneNode(true);

    fieldBody.append(newRow);
  }

  if (button.classList.contains('remove-row') && fieldBody.rows.length > 2) {
    fieldBody.lastElementChild.remove();
  }
}

function handleColumns(button) {
  Array.from(fieldBody.rows).forEach((row) => {
    if (button.classList.contains('append-column') && row.cells.length < 10) {
      const newCell = row.cells[0].cloneNode(true);

      row.append(newCell);
    }

    if (button.classList.contains('remove-column') && row.cells.length > 2) {
      row.lastElementChild.remove();
    }
  });
}

function updateButtonStates() {
  const rowCount = fieldBody.rows.length;
  const columnCount = fieldBody.rows[0]?.cells.length || 0;

  toggleButton('.append-row', rowCount < 10);
  toggleButton('.remove-row', rowCount > 2);
  toggleButton('.append-column', columnCount < 10);
  toggleButton('.remove-column', columnCount > 2);
}

function toggleButton(selector, isEnabled) {
  const button = document.querySelector(selector);

  if (isEnabled) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', 'true');
  }
}
