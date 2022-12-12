'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  if (tbody.rows.length >= 10) {
    return;
  }

  removeRowButton.disabled = false;

  tbody.insertAdjacentHTML('beforeend', `
    ${tbody.rows[tbody.rows.length - 1].outerHTML}
  `);

  if (tbody.rows.length >= 10) {
    appendRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', () => {
  if (tbody.rows.length <= 2) {
    return;
  }

  appendRowButton.disabled = false;

  tbody.deleteRow(tbody.rows.length - 1);

  if (tbody.rows.length <= 2) {
    removeRowButton.disabled = true;
  }
});

appendColumnButton.addEventListener('click', () => {
  if (tbody.rows[0].cells.length >= 10) {
    return;
  }

  removeColumnButton.disabled = false;

  for (let i = 0; i < tbody.rows.length; i++) {
    const cube = tbody.rows[0].cells[0];

    tbody.rows[i].insertAdjacentHTML('beforeend', cube.outerHTML);
  }

  if (tbody.rows[0].cells.length >= 10) {
    appendColumnButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', () => {
  if (tbody.rows[0].cells.length <= 2) {
    return;
  }

  appendColumnButton.disabled = false;

  for (let i = 0; i < tbody.rows.length; i++) {
    tbody.rows[i].cells[tbody.rows[i].cells.length - 1].outerHTML = null;
  }

  if (tbody.rows[0].cells.length === 2) {
    removeColumnButton.disabled = true;
  }
});
