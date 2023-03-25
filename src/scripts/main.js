'use strict';

addEventListener('click', e => {
  const addRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const addColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');
  const table = document.querySelectorAll('tr');

  switch (e.target) {
    case addRow:
      if (table.length >= 9) {
        addRow.disabled = true;
      }

      if (table.length >= 2) {
        removeRow.disabled = false;
      }

      table[0].before(table[0].cloneNode(true));
      break;

    case removeRow:
      if (table.length <= 10) {
        addRow.disabled = false;
      }

      if (table.length <= 3) {
        removeRow.disabled = true;
      }

      table[0].remove();
      break;

    case addColumn:
      if (table[0].children.length >= 9) {
        addColumn.disabled = true;
      }

      if (table[0].children.length >= 2) {
        removeColumn.disabled = false;
      }

      table.forEach(c => c.insertAdjacentHTML('beforeend', `
        <td></td>
      `));
      break;

    case removeColumn:
      if (table[0].children.length <= 10) {
        addColumn.disabled = false;
      }

      if (table[0].children.length <= 3) {
        removeColumn.disabled = true;
      }

      table.forEach(c => c.lastElementChild.remove());
      break;

    default:
      // eslint-disable-next-line
      return;
  }
});
