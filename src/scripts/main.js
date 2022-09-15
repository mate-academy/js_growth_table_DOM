'use strict';

// write code here
const tableBody = document.querySelector('.field tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const rows = tableBody.rows;

function disabled(element) {
  element.setAttribute('disabled', 'true');
}

function active(element) {
  element.removeAttribute('disabled');
}

appendRow.addEventListener('click', e => {
  tableBody.append(rows[0].cloneNode(true));

  if (rows.length === 10) {
    disabled(appendRow);
  }

  if (rows.length > 2) {
    active(removeRow);
  }
});

removeRow.addEventListener('click', e => {
  tableBody.lastElementChild.remove();

  if (rows.length === 2) {
    disabled(removeRow);
  }

  if (rows.length < 10) {
    active(appendRow);
  }
});

appendColumn.addEventListener('click', e => {
  for (let i = 0; i < rows.length; i++) {
    const cell = rows[i].cells[0].cloneNode(true);

    rows[i].append(cell);
  }

  const rowCells = rows[0].cells.length;

  if (rowCells === 10) {
    disabled(appendColumn);
  }

  if (rowCells > 2) {
    active(removeColumn);
  }
});

removeColumn.addEventListener('click', e => {
  for (let i = 0; i < rows.length; i++) {
    rows[i].lastElementChild.remove();
  }

  const rowCells2 = rows[0].cells.length;

  if (rowCells2 === 2) {
    disabled(removeColumn);
  }

  if (rowCells2 < 10) {
    active(appendColumn);
  }
});
