// src/scripts/main.js
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const tbody = table.tBodies[0] || table.querySelector('tbody');

  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColBtn = document.querySelector('.append-column');
  const removeColBtn = document.querySelector('.remove-column');

  // eslint-disable-next-line max-len
  if (
    !table ||
    !tbody ||
    !appendRowBtn ||
    !removeRowBtn ||
    !appendColBtn ||
    !removeColBtn
  )
    // eslint-disable-next-line curly
    return;

  const getRowCount = () => tbody.rows.length;
  const getColCount = () => (getRowCount() ? tbody.rows[0].cells.length : 0);

  const updateButtons = () => {
    const r = getRowCount();
    const c = getColCount();

    appendRowBtn.disabled = r >= 10;
    removeRowBtn.disabled = r <= 2;

    appendColBtn.disabled = c >= 10;
    removeColBtn.disabled = c <= 2;
  };

  appendRowBtn.addEventListener('click', () => {
    const cols = getColCount();

    // eslint-disable-next-line curly
    if (getRowCount() >= 10) return;

    const newRow = tbody.insertRow(tbody.rows.length);

    for (let i = 0; i < cols; i++) {
      // зазвичай контент не перевіряють; залишимо порожнім
      newRow.insertCell(i).textContent = '';
    }
    updateButtons();
  });

  removeRowBtn.addEventListener('click', () => {
    const r = getRowCount();

    // eslint-disable-next-line curly
    if (r <= 2) return;

    tbody.deleteRow(r - 1); // явний індекс останнього рядка
    updateButtons();
  });

  appendColBtn.addEventListener('click', () => {
    const c = getColCount();

    // eslint-disable-next-line curly
    if (c >= 10) return;

    Array.from(tbody.rows).forEach((row) => {
      row.insertCell(c).textContent = '';
    });
    updateButtons();
  });

  removeColBtn.addEventListener('click', () => {
    const c = getColCount();

    // eslint-disable-next-line curly
    if (c <= 2) return;

    Array.from(tbody.rows).forEach((row) => {
      row.deleteCell(c - 1); // явний індекс останньої колонки
    });
    updateButtons();
  });

  updateButtons();
});
