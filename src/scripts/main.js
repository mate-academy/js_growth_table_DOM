'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tbody = document.querySelector('tbody');

appendRow.addEventListener('click', function (e) {
  const tr = document.createElement('tr');
  let count;

  if (tbody.children >= 1) {
    count = tr.firstChild.children.length;
  } else {
    count = 2;
  }

  tbody.append(tr);

  for (let i = 0; i < count; i++) {
    tr.append(document.createElement('td'));
  }

  if (tbody.children.length === 9) {
    appendRow.disabled = true;
  }

  if (tbody.children.length > 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', function (e) {
  const lastRow = tbody.lastElementChild;

  lastRow.remove();

  if (tbody.children.length === 2) {
    removeRow.disabled = true;
  }

  if (tbody.children.length < 10) {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', function (e) {
  const rows = tbody.rows;

  for (const row of rows) {
    row.append(document.createElement('td'));
  }

  if (tbody.firstChild.children.length === 9) {
    appendColumn.disabled = true;
  }

  if (tbody.firstChild.children.length > 2) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', function (e) {
  const rows = tbody.rows;

  for (const row of rows) {
    row.lastElementChild.remove();
  }

  if (tbody.firstChild.children.length < 10) {
    appendColumn.disabled = false;
  }

  if (tbody.firstChild.children.length === 2) {
    removeColumn.disabled = true;
  }
});
