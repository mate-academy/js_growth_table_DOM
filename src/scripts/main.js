'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function updateButtons() {
  const rows = table.querySelectorAll('tr');
  const cols = rows[0].children.length;

  appendRow.disabled = rows.length >= 10;
  removeRow.disabled = rows.length <= 2;

  appendColumn.disabled = cols >= 10;
  removeColumn.disabled = cols <= 2;
}

appendColumn.addEventListener('click', () => {
  const rowsTr = table.querySelectorAll('tr');

  if (rowsTr[0].children.length >= 10) {
    return;
  }

  for (const el of rowsTr) {
    const newTd = document.createElement('td');

    el.appendChild(newTd);
  }

  updateButtons();
});

removeColumn.addEventListener('click', () => {
  const rowsTr = table.querySelectorAll('tr');

  rowsTr.forEach((e) => {
    const lastTd = e.lastElementChild;

    if (lastTd) {
      e.removeChild(lastTd);
    }
  });

  updateButtons();
});

appendRow.addEventListener('click', () => {
  const rowsTr = table.querySelectorAll('tr');

  if (rowsTr.length >= 10) {
    return;
  }

  const newTr = document.createElement('tr');
  const cols = rowsTr[0].children.length;

  for (let i = 0; i < cols; i++) {
    const newTd = document.createElement('td');

    newTr.appendChild(newTd);
  }

  table.appendChild(newTr);

  updateButtons();
});

removeRow.addEventListener('click', () => {
  const allRows = table.querySelectorAll('tr');

  if (allRows.length > 2) {
    allRows[allRows.length - 1].remove();
  }

  updateButtons();
});

updateButtons();
