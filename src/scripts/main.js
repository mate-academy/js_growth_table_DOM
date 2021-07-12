'use strict';

const table = document.querySelector('tbody');
const row = table.children[0];
const ceil = table.rows[0].children[0];
const maxColumnAndRows = 10;
const minCulumnAndRows = 2;
const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonRemoveColumn = document.querySelector('.remove-column');
const buttonAppendColumn = document.querySelector('.append-column ');

buttonAppendRow.addEventListener('click', () => {
  table.append(row.cloneNode(true));
  checkDisabled();
});

buttonRemoveRow.addEventListener('click', () => {
  table.lastChild.remove();
  checkDisabled();
});

buttonAppendColumn.addEventListener('click', () => {
  [...table.rows].forEach(itemRow => itemRow.append(ceil.cloneNode(true)));
  checkDisabled();
});

buttonRemoveColumn.addEventListener('click', () => {
  [...table.rows].forEach(itemColumn => itemColumn.children[0].remove());
  checkDisabled();
});

function checkDisabled() {
  buttonAppendRow.disabled = table.rows.length >= maxColumnAndRows
    ? 'true'
    : '';

  buttonRemoveRow.disabled = table.rows.length <= minCulumnAndRows
    ? 'true'
    : '';

  buttonAppendColumn.disabled
    = table.rows[0].children.length >= maxColumnAndRows
      ? 'true'
      : '';

  buttonRemoveColumn.disabled
    = table.rows[0].children.length <= minCulumnAndRows
      ? 'true'
      : '';
};
