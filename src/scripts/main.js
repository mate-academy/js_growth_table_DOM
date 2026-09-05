'use strict';

const field = document.querySelector('.field');
const container = document.querySelector('.container');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const updateButtons = () => {
  const rowCount = field.rows.length;
  const colCount = field.rows[0].cells.length;

  appendRowBtn.disabled = rowCount >= 10;
  removeRowBtn.disabled = rowCount <= 2;
  appendColBtn.disabled = colCount >= 10;
  removeColBtn.disabled = colCount <= 2;
};

const appendRow = () => {
  if (field.rows.length >= 10) {
    return;
  }

  const colCount = field.rows[0].cells.length;
  const newRow = document.createElement('tr');

  for (let i = 0; i < colCount; i++) {
    newRow.appendChild(document.createElement('td'));
  }

  const tbody = field.tBodies[0] || field;

  tbody.append(newRow);
};

const removeRow = () => {
  if (field.rows.length <= 2) {
    return;
  }

  field.rows[field.rows.length - 1].remove();
};

const appendColumn = () => {
  if (field.rows[0].cells.length >= 10) {
    return;
  }

  for (const row of field.rows) {
    row.appendChild(document.createElement('td'));
  }
};

const removeColumn = () => {
  if (field.rows[0].cells.length <= 2) {
    return;
  }

  for (const row of field.rows) {
    row.lastElementChild.remove();
  }
};

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('append-row')) {
    appendRow();
  } else if (e.target.classList.contains('remove-row')) {
    removeRow();
  } else if (e.target.classList.contains('append-column')) {
    appendColumn();
  } else if (e.target.classList.contains('remove-column')) {
    removeColumn();
  } else {
    return;
  }

  updateButtons();
});

updateButtons();
