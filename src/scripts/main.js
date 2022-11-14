'use strict';

const Btnrefs = {
  appendRow: document.querySelector('.append-row'),
  removeRow: document.querySelector('.remove-row'),
  appendColumn: document.querySelector('.append-column'),
  removeColumn: document.querySelector('.remove-column'),
};

const tableBody = document.querySelector('tbody');
const tableRow = document.querySelector('tr');

const container = document.querySelector('.container');

function growthTable(nameClass) {
  switch (nameClass) {
    case 'append-row button':
      const cloneRow = tableRow.cloneNode(true);

      tableBody.append(cloneRow);
      break;

    case 'remove-row button':
      tableBody.lastElementChild.remove();
      break;

    case 'append-column button':
      Array.from(tableBody.rows).forEach(row => {
        const cell = row.cells[0];
        const cloneCell = cell.cloneNode(true);

        row.appendChild(cloneCell);
      });
      break;
    case 'remove-column button':
      Array.from(tableBody.rows).forEach(row => {
        row.lastChild.remove();
      });
      break;
  }
}

function onClick(e) {
  if (e.target.tagName !== 'BUTTON') {
    return;
  };

  const button = e.target;

  growthTable(button.className);

  const rowLength = tableBody.rows.length;
  const columnLength = tableBody.rows[0].cells.length;

  Btnrefs.appendRow.disabled = rowLength >= 10;
  Btnrefs.removeRow.disabled = rowLength <= 2;
  Btnrefs.appendColumn.disabled = columnLength >= 10;
  Btnrefs.removeColumn.disabled = columnLength <= 2;
}

container.addEventListener('click', onClick);
