'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  if (table.rows.length < 10) {
    const rows =
      '<tr>' + '<td></td>'.repeat(table.rows[0].cells.length) + '</tr>';

    table.insertAdjacentHTML('beforeend', rows);
  }

  updateButtons();
});

appendColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length < 10) {
    table
      .querySelectorAll('tr')
      .forEach((e) => e.insertAdjacentHTML('beforeend', '<td></td>'));
  }

  updateButtons();
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.deleteRow(-1);
  }

  updateButtons();
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length > 2) {
    table.querySelectorAll('tr').forEach((e) => e.lastElementChild.remove());
  }

  updateButtons();
});

function updateButtons() {
  appendRow.disabled = table.rows.length >= 10;
  removeRow.disabled = table.rows.length <= 2;

  appendColumn.disabled = table.rows[0].cells.length >= 10;
  removeColumn.disabled = table.rows[0].cells.length <= 2;
}
