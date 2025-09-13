'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const tbody = table.tBodies[0] || table.querySelector('tbody');
const rows = tbody.rows;

function updateButtonsState() {
  let firstDataRow = tbody.rows[0];

  if (firstDataRow.cells[0].tagName.toLowerCase() === 'th') {
    if (tbody.rows.length > 1) {
      firstDataRow = tbody.rows[1];
    } else {
      return;
    }
  }

  if (rows.length === 2) {
    removeRowBtn.disabled = true;
  } else {
    removeRowBtn.disabled = false;
  }

  if (rows.length < 10) {
    appendRowBtn.disabled = false;
  } else {
    appendRowBtn.disabled = true;
  }

  if (rows[0].cells.length < 10) {
    appendColumnBtn.disabled = false;
  } else {
    appendColumnBtn.disabled = true;
  }

  if (rows[0].cells.length === 2) {
    removeColumnBtn.disabled = true;
  } else {
    removeColumnBtn.disabled = false;
  }
}

appendRowBtn.addEventListener('click', () => {
  // eslint-disable-next-line curly
  if (tbody.rows.length >= 10) return; // обмеження максимум 10 рядків

  const firstDataRow =
    tbody.rows[0].cells[0].tagName.toLowerCase() === 'th'
      ? tbody.rows[1]
      : tbody.rows[0];

  const currentColumns = firstDataRow.cells.length;
  const newTr = document.createElement('tr');

  for (let i = 0; i < currentColumns; i++) {
    const newTd = document.createElement('td');

    newTr.appendChild(newTd);
  }

  tbody.appendChild(newTr);

  updateButtonsState();
});

removeRowBtn.addEventListener('click', () => {
  // eslint-disable-next-line curly
  if (tbody.rows.length <= 2) return;

  tbody.deleteRow(rows.length - 1);

  updateButtonsState();
});

appendColumnBtn.addEventListener('click', () => {
  const firstDataRow =
    tbody.rows[0].cells[0].tagName.toLowerCase() === 'th'
      ? tbody.rows[1]
      : tbody.rows[0];

  // eslint-disable-next-line curly
  if (firstDataRow.cells.length >= 10) return;

  for (let i = 0; i < rows.length; i++) {
    const newTd = document.createElement('td');

    rows[i].appendChild(newTd);
  }

  updateButtonsState();
});

removeColumnBtn.addEventListener('click', () => {
  const firstDataRow =
    tbody.rows[0].cells[0].tagName.toLowerCase() === 'th'
      ? tbody.rows[1]
      : tbody.rows[0];

  // eslint-disable-next-line curly
  if (firstDataRow.cells.length <= 2) return;

  for (let i = 0; i < rows.length; i++) {
    rows[i].deleteCell(rows[i].cells.length - 1);
  }

  updateButtonsState();
});
