'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('tbody');
const maxColumnAndRows = 10;
const minCulumnAndRows = 2;

container.addEventListener('click', e => {
  const item = e.target.closest('.button');
  const row = table.rows[0];
  const ceil = table.rows[0].children[0];
  const buttonAppendRow = document.querySelector('.append-row');
  const buttonRemoveRow = document.querySelector('.remove-row');
  const buttonRemoveColumn = document.querySelector('.remove-column');
  const buttonAppendColumn = document.querySelector('.append-column ');

  if (!item || !container.contains(item)) {
    return;
  }

  switch (item.classList[0]) {
    case 'append-row':
      table.append(row.cloneNode(true));
      break;
    case 'remove-row':
      row.remove();
      break;
    case 'append-column':
      [...table.rows].forEach(itemRow => itemRow.append(ceil.cloneNode(true)));
      break;
    case 'remove-column':
      [...table.rows].forEach(itemColumn => itemColumn.children[0].remove());
  }

  buttonAppendRow.disabled = table.rows.length >= maxColumnAndRows
    ? 'true'
    : '';

  buttonAppendColumn.disabled
    = table.rows[0].children.length >= maxColumnAndRows
      ? 'true'
      : '';

  buttonRemoveRow.disabled = table.rows.length <= minCulumnAndRows
    ? 'true'
    : '';

  buttonRemoveColumn.disabled
    = table.rows[0].children.length <= minCulumnAndRows
      ? 'true'
      : '';
});
