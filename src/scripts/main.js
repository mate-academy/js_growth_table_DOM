'use strict';

// write code here
const appendRowBtn = document.querySelector('.append-row');
const deleteRowBtn = document.querySelector('.remove-row');

appendRowBtn.addEventListener('click', function (e) {
  const row = document.querySelector('tr');

  const clonedRow = row.cloneNode(true);

  const table = document.querySelector('tbody');

  table.append(clonedRow);

  const newRows = document.querySelectorAll('tr');

  if (newRows.length >= 10) {
    appendRowBtn.disabled = true;
  }

  if (newRows.length > 2) {
    deleteRowBtn.disabled = false;
  }
});

deleteRowBtn.addEventListener('click', function (e) {
  document.querySelector('tbody tr:last-child').remove();

  const newRows = document.querySelectorAll('tr');

  if (newRows.length <= 2) {
    deleteRowBtn.disabled = true;

    return;
  }

  if (newRows.length < 10) {
    appendRowBtn.disabled = false;
  }
});

const deleteColumnBtn = document.querySelector('.remove-column');
const appendColumnBtn = document.querySelector('.append-column');

deleteColumnBtn.addEventListener('click', function (e) {
  const rows = [...document.querySelectorAll('tr')];

  rows.forEach((row) => {
    row.querySelector('td:last-child').remove();
  });

  const newRow = document.querySelector('tr');

  if (newRow.children.length <= 2) {
    deleteColumnBtn.disabled = true;
  }

  if (newRow.children.length < 10) {
    appendColumnBtn.disabled = false;
  }
});

appendColumnBtn.addEventListener('click', function (e) {
  const rows = [...document.querySelectorAll('tr')];

  rows.forEach((row) => {
    const el = row.querySelector('td');
    const clonedEl = el.cloneNode(true);

    row.append(clonedEl);
  });

  const newRow = document.querySelector('tr');

  if (newRow.children.length > 2) {
    deleteColumnBtn.disabled = false;
  }

  if (newRow.children.length >= 10) {
    appendColumnBtn.disabled = true;
  }
});
