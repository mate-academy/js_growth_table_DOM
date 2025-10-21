'use strict';

'use strict';

const btnAddRow = document.querySelector('.append-row');
const btnDelRow = document.querySelector('.remove-row');
const btnAddCol = document.querySelector('.append-column');
const btnDelCol = document.querySelector('.remove-column');

function updateButtons() {
  const countTr = document.querySelectorAll('tr').length;
  const countTd = document.querySelector('tr').childElementCount;

  btnAddRow.disabled = countTr >= 10;
  btnDelRow.disabled = countTr <= 2;

  btnAddCol.disabled = countTd >= 10;
  btnDelCol.disabled = countTd <= 2;
}

function addRow() {
  const countTr = document.querySelectorAll('tr').length;

  if (countTr >= 10) {
    return;
  }

  const countTd = document.querySelector('tr').childElementCount;
  const table = document.querySelector('tbody');
  const tr = document.createElement('tr');

  for (let i = 0; i < countTd; i++) {
    const td = document.createElement('td');

    tr.append(td);
  }

  table.append(tr);
  updateButtons();
}

function delRow() {
  const rows = document.querySelectorAll('tr');

  if (rows.length <= 2) {
    return;
  }

  rows[rows.length - 1].remove();
  updateButtons();
}

function addCol() {
  const countTd = document.querySelector('tr').childElementCount;

  if (countTd >= 10) {
    return;
  }

  document.querySelectorAll('tr').forEach((row) => {
    const td = document.createElement('td');

    row.append(td);
  });

  updateButtons();
}

function delCol() {
  const countTd = document.querySelector('tr').childElementCount;

  if (countTd <= 2) {
    return;
  }

  document.querySelectorAll('tr').forEach((row) => {
    row.lastElementChild.remove();
  });

  updateButtons();
}

btnAddCol.addEventListener('click', addCol);
btnAddRow.addEventListener('click', addRow);
btnDelCol.addEventListener('click', delCol);
btnDelRow.addEventListener('click', delRow);

updateButtons();
