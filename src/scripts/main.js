'use strict';

const appendRow = document.querySelector('.append-row.button');
const removeRow = document.querySelector('.remove-row.button');

const appendColumn = document.querySelector('.append-column.button');
const removeColumn = document.querySelector('.remove-column.button');

const container = document.querySelector('.container');
const tbody = document.querySelector('tbody');

const maxCount = 10;
const minCount = 2;

// write code here
function appendingRow(tbody) {
  const rows = Array.from(tbody.rows)

  if (rows.length < maxCount) {
    const tr = rows[0];
    const columnsOfTr = Array.from(tr.querySelectorAll('td'));

    const newTr = document.createElement('tr');
    columnsOfTr.forEach(column => {
    const cloneTd = column.cloneNode(true);
    newTr.append(cloneTd);
    });
    tbody.append(newTr);

    if (tbody.rows.length > minCount) {
      removeRow.disabled = false;
    }

    if (tbody.rows.length === maxCount) {
      appendRow.disabled = true;
    }
  }
}

function appendingColumn(tbody) {
  const rows = Array.from(tbody.rows);

  if (rows[0].cells.length < maxCount) {
    rows.forEach(row => {
      const td = row.firstElementChild.cloneNode(true);
      row.append(td);
    });

    appendColumn.disabled = rows[0].cells.length === maxCount;
    removeColumn.disabled = rows[0].cells.length <= minCount;
  }
}

function removingRow(tbody) {
  const rows = Array.from(tbody.rows);

  if (rows.length > minCount) {
    const lastTr = tbody.lastElementChild;
    lastTr.remove();

    if (tbody.rows.length < maxCount) {
      appendRow.disabled = false;
    }

    if (tbody.rows.length === minCount) {
      removeRow.disabled = true;
    }
  }
}

function removingColumn(tbody) {
  const rows = Array.from(tbody.rows);

  if (rows[0].cells.length > minCount) {
    rows.forEach(row => row.lastElementChild.remove());
  }

  appendColumn.disabled = rows[0].cells.length === maxCount;
  removeColumn.disabled = rows[0].cells.length === minCount;
}

document.addEventListener('click', (e) => {
  const myTarget = e.target.closest('button');

  if (myTarget === appendRow) {
    appendingRow(tbody);
  }
  else if (myTarget === appendColumn) {
    appendingColumn(tbody);
  }
  else if (myTarget === removeRow) {
    removingRow(tbody);
  }
  else if (myTarget === removeColumn){
    removingColumn(tbody);
  }
  else {
    return;
  }
});
