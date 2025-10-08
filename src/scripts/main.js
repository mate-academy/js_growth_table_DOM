'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');
const thead = table.querySelector('thead');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

// Начальные размеры
let rowsCount = tbody ? tbody.rows.length : 0;
let colsCount =
  thead?.querySelector('tr')?.cells.length || tbody?.rows[0]?.cells.length || 0;

function updateButtons() {
  appendRow.disabled = rowsCount >= 10;
  removeRow.disabled = rowsCount <= 2;
  appendColumn.disabled = colsCount >= 10;
  removeColumn.disabled = colsCount <= 2;
}

appendRow.addEventListener('click', () => {
  if (rowsCount < 10 && tbody) {
    const tr = document.createElement('tr');

    for (let i = 0; i < colsCount; i++) {
      tr.appendChild(document.createElement('td'));
    }
    tbody.appendChild(tr);
    rowsCount++;
    updateButtons();
  }
});

removeRow.addEventListener('click', () => {
  if (rowsCount > 2 && tbody) {
    tbody.lastElementChild.remove();
    rowsCount--;
    updateButtons();
  }
});

appendColumn.addEventListener('click', () => {
  if (colsCount < 10) {
    if (thead) {
      for (let i = 0; i < thead.rows.length; i++) {
        const cellType = thead.rows[i].cells[0]?.tagName || 'TH';
        const newCell = document.createElement(cellType.toLowerCase());

        thead.rows[i].appendChild(newCell);
      }
    }

    if (tbody) {
      for (let i = 0; i < tbody.rows.length; i++) {
        const cellType = tbody.rows[i].cells[0]?.tagName || 'TD';
        const newCell = document.createElement(cellType.toLowerCase());

        tbody.rows[i].appendChild(newCell);
      }
    }

    colsCount++;
    updateButtons();
  }
});

removeColumn.addEventListener('click', () => {
  if (colsCount > 2) {
    if (thead) {
      for (let i = 0; i < thead.rows.length; i++) {
        thead.rows[i].lastElementChild.remove();
      }
    }

    if (tbody) {
      for (let i = 0; i < tbody.rows.length; i++) {
        tbody.rows[i].lastElementChild.remove();
      }
    }

    colsCount--;
    updateButtons();
  }
});

updateButtons();
