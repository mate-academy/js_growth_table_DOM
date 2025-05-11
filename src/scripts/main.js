'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  if (
    !table ||
    !appendRowBtn ||
    !removeRowBtn ||
    !appendColumnBtn ||
    !removeColumnBtn
  ) {
    // eslint-disable-next-line no-console
    console.error('One or more elements not found in the DOM.');

    return;
  }

  const MAX_COUNT = 10;
  const MIN_COUNT = 2;

  function updateButtonStates() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    appendRowBtn.disabled = rowCount >= MAX_COUNT;
    removeRowBtn.disabled = rowCount <= MIN_COUNT;
    appendColumnBtn.disabled = colCount >= MAX_COUNT;
    removeColumnBtn.disabled = colCount <= MIN_COUNT;
  }

  appendRowBtn.addEventListener('click', function () {
    if (table.rows.length < MAX_COUNT) {
      const row = document.createElement('tr');
      const colCount = table.rows[0].cells.length;

      for (let i = 0; i < colCount; i++) {
        const cell = document.createElement('td');

        cell.textContent = `Row ${table.rows.length + 1} Col ${i + 1}`;
        row.appendChild(cell);
      }
      table.appendChild(row);
      updateButtonStates();
    }
  });

  removeRowBtn.addEventListener('click', function () {
    if (table.rows.length > MIN_COUNT) {
      table.deleteRow(-1);
      updateButtonStates();
    }
  });

  appendColumnBtn.addEventListener('click', () => {
    if (table.rows[0].cells.length < MAX_COUNT) {
      Array.from(table.rows).forEach((row) => {
        row.appendChild(document.createElement('td'));
      });
      updateButtonStates();
    }
  });

  removeColumnBtn.addEventListener('click', function () {
    if (table.rows[0].cells.length > MIN_COUNT) {
      Array.from(table.rows).forEach((row) => {
        row.deleteCell(-1);
      });
      updateButtonStates();
    }
  });
  updateButtonStates();
});
