'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const buttons = document.querySelectorAll('.button');
const appendRowBtn = buttons[0];
const removeRowBtn = buttons[1];
const appendColumnBtn = buttons[2];
const removeColumnBtn = buttons[3];

let rowCount = 4;
let cellsCount = 4;

function removeRow(tableBody) {
  tableBody.lastElementChild.remove();
  rowCount--;
}

function appendRow(tableBody) {
  const cloneRow = tableBody.lastElementChild.cloneNode(true);

  tableBody.lastElementChild.before(cloneRow);
  rowCount++;
}

function appendColumn(tableBody) {
  const rows = [...tableBody.children];

  rows.forEach((row) => {
    const cloneColumn = row.cells[1].cloneNode(true);

    row.appendChild(cloneColumn);
  });

  cellsCount++;
}

function removeColumn(tableBody) {
  const rows = [...tableBody.children];

  rows.forEach((row) => {
    row.lastElementChild.remove();
  });

  cellsCount--;
}

appendRowBtn.addEventListener('click', () => {
  if (rowCount < 10) {
    removeRowBtn.disabled = false;

    appendRow(tbody);
  }

  if (rowCount === 10) {
    appendRowBtn.disabled = true;
  }
});

removeRowBtn.addEventListener('click', () => {
  if (rowCount > 2) {
    appendRowBtn.disabled = false;

    removeRow(tbody);
  }

  if (rowCount === 2) {
    removeRowBtn.disabled = true;
  }
});

appendColumnBtn.addEventListener('click', () => {
  if (cellsCount < 10) {
    removeColumnBtn.disabled = false;

    appendColumn(tbody);
  }

  if (cellsCount === 10) {
    appendColumnBtn.disabled = true;
  }
});

removeColumnBtn.addEventListener('click', () => {
  if (cellsCount > 2) {
    appendColumnBtn.disabled = false;

    removeColumn(tbody);
  }

  if (cellsCount === 2) {
    removeColumnBtn.disabled = true;
  }
});
