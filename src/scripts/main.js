document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');
  const maxCount = 10;
  const minCount = 2;
  let totalRowCount = 4;
  let totalColumnCount = 4;
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody');
  const tr = tbody.querySelector('tr');
  const td = tbody.querySelector('td');

  function updateRowButtons() {
    if (totalRowCount <= minCount) {
      removeRow.setAttribute('disabled', 'disabled');
    } else {
      removeRow.removeAttribute('disabled');
    }

    if (totalRowCount >= maxCount) {
      appendRow.setAttribute('disabled', 'disabled');
    } else {
      appendRow.removeAttribute('disabled');
    }
  }

  updateRowButtons();

  appendRow.addEventListener('click', () => {
    if (totalRowCount < maxCount) {
      tbody.append(tr.cloneNode(true));
      totalRowCount += 1;
      updateRowButtons();
    } else {
      appendRow.setAttribute('disabled', 'disabled');
    }
  });

  removeRow.addEventListener('click', () => {
    if (totalRowCount > minCount) {
      const rows = tbody.querySelectorAll('tr');
      const last = rows[rows.length - 1];

      if (last) {
        last.remove();
      }

      totalRowCount -= 1;
      updateRowButtons();
    } else {
      removeRow.setAttribute('disabled', 'disabled');
    }
  });

  function updateColButtons() {
    if (totalColumnCount <= minCount) {
      removeColumn.setAttribute('disabled', 'disabled');
    } else {
      removeColumn.removeAttribute('disabled');
    }

    if (totalColumnCount >= maxCount) {
      appendColumn.setAttribute('disabled', 'disabled');
    } else {
      appendColumn.removeAttribute('disabled');
    }
  }

  updateColButtons();

  appendColumn.addEventListener('click', () => {
    if (totalColumnCount < maxCount) {
      const rows = tbody.querySelectorAll('tr');

      rows.forEach((elem) => {
        elem.append(td.cloneNode(true));
      });

      totalColumnCount += 1;
      updateColButtons();
    } else {
      appendColumn.setAttribute('disabled', 'disabled');
    }
  });

  removeColumn.addEventListener('click', () => {
    if (totalColumnCount > minCount) {
      const rows = tbody.querySelectorAll('tr');

      rows.forEach((elem) => {
        elem.lastElementChild.remove();
      });

      totalColumnCount -= 1;
      updateColButtons();
    } else {
      removeColumn.setAttribute('disabled', 'disabled');
    }
  });
});
