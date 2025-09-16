'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const field = document.querySelector('.field');
  const tbody = field.querySelector('tbody');

  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColBtn = document.querySelector('.append-column');
  const removeColBtn = document.querySelector('.remove-column');

  const updateButtons = () => {
    const rowCount = tbody.rows.length;
    const colCount = tbody.rows[0].cells.length;

    appendRowBtn.disabled = rowCount >= 10;
    removeRowBtn.disabled = rowCount <= 2;

    appendColBtn.disabled = colCount >= 10;
    removeColBtn.disabled = colCount <= 2;
  };

  appendRowBtn.addEventListener('click', () => {
    const rows = [...tbody.rows];

    if (rows.length >= 10) {
      return;
    }

    const rowLength = rows[0].cells.length;
    const row = document.createElement('tr');

    for (let i = 0; i < rowLength; i++) {
      const td = document.createElement('td');

      row.append(td);
    }

    tbody.append(row);

    updateButtons();
  });

  removeRowBtn.addEventListener('click', () => {
    const rows = [...tbody.rows];

    if (rows.length <= 2) {
      return;
    }

    rows[rows.length - 1].remove();

    updateButtons();
  });

  appendColBtn.addEventListener('click', () => {
    const rows = [...tbody.rows];

    if (rows[0].cells.length >= 10) {
      return;
    }

    rows.forEach((tr) => {
      const td = document.createElement('td');

      tr.append(td);
    });

    updateButtons();
  });

  removeColBtn.addEventListener('click', () => {
    const rows = [...tbody.rows];

    if (rows[0].cells.length <= 2) {
      return;
    }

    rows.forEach((tr) => tr.removeChild(tr.lastElementChild));

    updateButtons();
  });
});
