'use strict';

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const tbody = document.querySelector('tbody');

function getRowCount() {
  return tbody.children.length;
}

function getColumnCount() {
  return tbody.querySelector('tr').children.length;
}

function updateButtons() {
  appendRow.disabled = getRowCount() >= 10;
  removeRow.disabled = getRowCount() <= 2;

  appendColumn.disabled = getColumnCount() >= 10;
  removeColumn.disabled = getColumnCount() <= 2;
}

addEventListener('click', (ev) => {
  if (ev.target === appendRow && getRowCount() < 10) {
    const newRow = document.createElement('tr');
    const cols = getColumnCount();

    for (let i = 0; i < cols; i++) {
      newRow.append(document.createElement('td'));
    }

    tbody.append(newRow);
  }

  if (ev.target === removeRow && getRowCount() > 2) {
    tbody.lastElementChild.remove();
  }

  if (ev.target === appendColumn && getColumnCount() < 10) {
    for (const row of tbody.children) {
      row.append(document.createElement('td'));
    }
  }

  if (ev.target === removeColumn && getColumnCount() > 2) {
    for (const row of tbody.children) {
      row.lastElementChild.remove();
    }
  }

  updateButtons();
});
