'use strict';

const buttons = document.querySelector('.container');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const table = document.querySelector('table');
const tBody = table.querySelector('tbody');

buttons.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  const classButton = e.target.classList;
  const row = tBody.querySelector('tr');
  const rowInTable = tBody.querySelectorAll('tr');

  if (classButton.contains('append-row')) {
    const columnInRow = row.querySelectorAll('td');
    const newRow = document.createElement('tr');

    if (rowInTable.length === 10) {
      return;
    }

    for (let i = 0; i < columnInRow.length; i++) {
      const newCell = document.createElement('td');

      newRow.append(newCell);
    }

    tBody.append(newRow);
    updateButtonsState();
  }

  if (classButton.contains('remove-row')) {
    if (rowInTable.length === 2) {
      return;
    }
    appendRowBtn.disabled = false;

    rowInTable[rowInTable.length - 1].remove();
    updateButtonsState();
  }

  if (classButton.contains('append-column')) {
    const columnInRow = row.querySelectorAll('td');

    if (columnInRow.length === 10) {
      return;
    }

    rowInTable.forEach((tr) => {
      tr.append(document.createElement('td'));
    });
    updateButtonsState();
  }

  if (classButton.contains('remove-column')) {
    const columnInRow = row.querySelectorAll('td');

    if (columnInRow.length === 2) {
      return;
    }

    rowInTable.forEach((tr) => {
      const cells = tr.querySelectorAll('td');

      cells[cells.length - 1].remove();
    });
    updateButtonsState();
  }
});

function updateButtonsState() {
  const rows = tBody.querySelectorAll('tr');
  const cols = rows[0].querySelectorAll('td');

  appendRowBtn.disabled = rows.length >= 10;
  removeRowBtn.disabled = rows.length <= 2;

  appendColBtn.disabled = cols.length >= 10;
  removeColBtn.disabled = cols.length <= 2;
}
