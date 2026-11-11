'use strict';

const container = document.querySelector('div.container');
const table = container.querySelector('.field');

const selectButton = {
  appendRow: document.querySelector('.append-row'),
  removeRow: document.querySelector('.remove-row'),

  appendColumn: document.querySelector('.append-column'),
  removeColumn: document.querySelector('.remove-column'),
};

const tableState = {
  rows: [...table.querySelectorAll('tr')].length,
  columns: [...table.querySelector('tr').querySelectorAll('td')].length,
};

function canBeAdded(amount) {
  return amount < 10;
}

function canBeRemoved(amount) {
  return amount > 2;
}

function updateButtonsState() {
  selectButton.appendRow.disabled = !canBeAdded(tableState.rows);
  selectButton.removeRow.disabled = !canBeRemoved(tableState.rows);

  selectButton.appendColumn.disabled = !canBeAdded(tableState.columns);
  selectButton.removeColumn.disabled = !canBeRemoved(tableState.columns);
}

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('append-row')) {
    if (!canBeAdded(tableState.rows)) return;

    const copyRow = table.querySelector('tr').cloneNode(true);

    table.append(copyRow);

    tableState.rows += 1;

    updateButtonsState();
  }

  if (e.target.classList.contains('remove-row')) {
    if (!canBeRemoved(tableState.rows)) return;

    const allRows = table.querySelectorAll('tr');

    allRows[allRows.length - 1].remove();

    tableState.rows -= 1;

    updateButtonsState();
  }

  if (e.target.classList.contains('append-column')) {
    if (!canBeAdded(tableState.columns)) return;

    const rows = [...table.querySelectorAll('tr')];

    rows.forEach((row) => {
      const createCell = document.createElement('td');

      row.append(createCell);
    });

    tableState.columns += 1;

    updateButtonsState();
  }

  if (e.target.classList.contains('remove-column')) {
    if (!canBeRemoved(tableState.columns)) return;

    const removeColumn = [...table.querySelectorAll('tr')];

    removeColumn.forEach((node) => {
      node.lastElementChild.remove();
    });

    tableState.columns -= 1;

    updateButtonsState();
  }
});
