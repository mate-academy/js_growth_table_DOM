'use strict';

const container = document.querySelector('.container');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field');

let countRow = 4;
let countColumn = 4;

appendRow.addEventListener('click', () => {
  if (countRow < 10) {
    appendRow.disabled = false;
    countRow++;

    const row = field.insertRow();

    for (let i = 0; i < field.rows[0].cells.length; i++) {
      row.insertCell();
    }
  }

  if (countRow >= 10) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  if (countRow > 2) {
    removeRow.disabled = false;
    countRow--;

    const removeRowTab = field.querySelectorAll('tr');

    removeRowTab[removeRowTab.length - 1].remove();
  }

  if (countRow <= 2) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  if (countColumn < 10) {
    appendColumn.disabled = false;
    countColumn++;
    addColumn(container);
  }

  if (countColumn >= 10) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  if (countColumn > 2) {
    removeColumn.disabled = false;

    countColumn--;
    removeColumns(container);
  }

  if (countColumn <= 2) {
    removeColumn.disabled = true;
  }
});

function addColumn(doc) {
  const row = doc.querySelectorAll('table tr');

  for (let i = 0; i < row.length; i++) {
    const td = document.createElement('td');

    row[i].append(td);
  }
}

function removeColumns(doc) {
  const row = doc.querySelectorAll('table tr');

  for (let i = 0; i < row.length; i++) {
    const delEl = row[i].cells[row[i].cells.length - 1];

    delEl.remove();
  }
}
