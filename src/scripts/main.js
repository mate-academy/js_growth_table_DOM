'use strict';

const buttons = document.querySelectorAll('.button');
const table = document.querySelector('.field');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const target = e.target.classList[0];
    const tr = document.querySelectorAll('tr').length;
    const rows = table.lastChild.rows;
    const appendRow = document.querySelector('.append-row');
    const deleteRow = document.querySelector('.remove-row');
    const appendColumn = document.querySelector('.append-column');
    const deleteColumn = document.querySelector('.remove-column');

    if (target === 'append-row' && tr <= 9) {
      const addRow = rows[0].cloneNode(true);

      if (tr === 9) {
        e.target.setAttribute('disabled', '');
      }

      table.lastChild.append(addRow);
      deleteRow.removeAttribute('disabled');
    } else if (target === 'remove-row') {
      if (rows.length === 3) {
        deleteRow.setAttribute('disabled', '');
      }

      appendRow.removeAttribute('disabled');
      rows[2].remove();
    } else if (target === 'append-column' && rows[0].cells.length <= 9) {
      if (rows[0].cells.length === 9) {
        appendColumn.setAttribute('disabled', '');
      }
      deleteColumn.removeAttribute('disabled');

      Array.from(rows).forEach((row) => {
        const copyRow = row.cells[0].cloneNode(true);

        row.append(copyRow);
      });
    } else if (target === 'remove-column') {
      if (rows[0].cells.length === 3) {
        deleteColumn.setAttribute('disabled', '');
      }
      appendColumn.removeAttribute('disabled');

      Array.from(rows).forEach((row) => {
        row.cells[2].remove();
      });
    }
  });
});
