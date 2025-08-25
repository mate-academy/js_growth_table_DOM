'use strict';

const table = document.querySelector('.container');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const field = document.querySelector('tbody');

function updateButtons() {
  const rows = field.querySelectorAll('tr');
  const cols = rows[0]?.children.length || 0;

  appendRowBtn.disabled = rows.length >= 10;
  removeRowBtn.disabled = rows.length <= 2;

  appendColumnBtn.disabled = cols >= 10;
  removeColumnBtn.disabled = cols <= 2;
}

function addRow() {
  const rows = field.querySelectorAll('tr');

  if (rows.length >= 10) {
    return;
  }

  const newRow = document.createElement('tr');

  for (let i = 0; i < rows[0].children.length; i++) {
    newRow.appendChild(document.createElement('td'));
  }
  field.appendChild(newRow);
  updateButtons();
}

function removeRow() {
  const rows = field.querySelectorAll('tr');

  if (rows.length <= 2) {
    return;
  }

  field.removeChild(field.lastElementChild);
  updateButtons();
}

function addColumn() {
  const rows = field.querySelectorAll('tr');
  const cols = rows[0].children.length;

  if (cols >= 10) {
    return;
  }

  rows.forEach((row) => row.appendChild(document.createElement('td')));
  updateButtons();
}

function removeColumn() {
  const rows = field.querySelectorAll('tr');
  const cols = rows[0].children.length;

  if (cols <= 2) {
    return;
  }

  rows.forEach((row) => row.removeChild(row.lastElementChild));
  updateButtons();
}

table.addEventListener('click', (e) => {
  if (e.target.classList.contains('append-row')) {
    addRow();
  }

  if (e.target.classList.contains('remove-row')) {
    removeRow();
  }

  if (e.target.classList.contains('append-column')) {
    addColumn();
  }

  if (e.target.classList.contains('remove-column')) {
    removeColumn();
  }
});

updateButtons();
