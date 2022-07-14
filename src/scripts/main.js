'use strict';

const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const maxCount = 10;
const minCount = 2;

document.addEventListener('click', (e) => {
  const target = e.target.closest('.button');

  if (!target || target.disabled) {
    return;
  }

  switch (target) {
    case appendRow:
      tbody.append(tbody.querySelector('tr').cloneNode(true));
      break;

    case removeRow:
      tbody.querySelector('tr').remove();
      break;

    case appendColumn:
      [...tbody.rows].forEach(row =>
        row.append(row.lastElementChild.cloneNode(true)));
      break;

    case removeColumn:
      [...tbody.rows].forEach(row => row.firstElementChild.remove());
      break;
  }

  const shouldAddRowBeDisabled = tbody.rows.length >= maxCount;

  appendRow.disabled = shouldAddRowBeDisabled;

  const shouldRemoveRowBeDisabled = tbody.rows.length <= minCount;

  removeRow.disabled = shouldRemoveRowBeDisabled;

  const shouldAddColumnBeDisabled = tbody.querySelector('tr')
    .children.length >= maxCount;

  appendColumn.disabled = shouldAddColumnBeDisabled;

  const shouldRemoveColumnBeDisabled = tbody.querySelector('tr')
    .children.length <= minCount;

  removeColumn.disabled = shouldRemoveColumnBeDisabled;
});
