'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColBtn = document.querySelector('.append-column');
  const removeColBtn = document.querySelector('.remove-column');

  const table = document.querySelector('table');
  const tbody = table.querySelector('.tbody') || table;

  const getRowCount = () => tbody.querySelectorAll('tr').length;
  const getColCount = () => {
    const firstRow = tbody.querySelector('tr');

    return firstRow ? firstRow.children.length : 0;
  };

  const updateButtonsState = () => {
    const rows = getRowCount();
    const cols = getColCount();

    appendRowBtn.disabled = rows >= 10;
    removeRowBtn.disabled = rows <= 2;

    appendColBtn.disabled = cols >= 10;
    removeColBtn.disabled = cols <= 2;
  };

  appendRowBtn.addEventListener('click', () => {
    const newRow = document.createElement('tr');
    const cols = getColCount();

    for (let i = 0; i < cols; i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }

    tbody.appendChild(newRow);
    updateButtonsState();
  });

  removeRowBtn.addEventListener('click', () => {
    if (getRowCount() > 2) {
      const rows = tbody.querySelectorAll('tr');

      rows[rows.length - 1].remove();
      updateButtonsState();
    }
  });

  appendColBtn.addEventListener('click', () => {
    if (getColCount() < 10) {
      const rows = tbody.querySelectorAll('tr');

      rows.forEach((row) => {
        const newCell = document.createElement('td');

        row.appendChild(newCell);
      });
      updateButtonsState();
    }
  });

  removeColBtn.addEventListener('click', () => {
    if (getColCount() > 2) {
      const rows = tbody.querySelectorAll('tr');

      rows.forEach((row) => {
        if (row.lastElementChild) {
          row.lastElementChild.remove();
        }
      });
      updateButtonsState();
    }
  });

  updateButtonsState();
});
