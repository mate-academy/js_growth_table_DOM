'use strict';

const table = document.querySelector('table.field');
const rowButtons = {
  append: document.querySelector('.append-row.button'),
  remove: document.querySelector('.remove-row.button'),
};
const columnButtons = {
  append: document.querySelector('.append-column.button'),
  remove: document.querySelector('.remove-column.button'),
};

function updateButtons() {
  const rows = table.rows.length;
  const cols = table.rows[0].cells.length;

  rowButtons.append.disabled = rows >= 10;
  rowButtons.remove.disabled = rows <= 2;
  columnButtons.append.disabled = cols >= 10;
  columnButtons.remove.disabled = cols <= 2;
}

rowButtons.append.onclick = function () {
  if (table.rows.length >= 10) {
    return;
  }

  const cols = table.rows[0].cells.length;
  const tr = document.createElement('tr');

  tr.innerHTML = '<td></td>'.repeat(cols);
  table.tBodies[0].appendChild(tr);
  updateButtons();
};

rowButtons.remove.onclick = function () {
  if (table.rows.length <= 2) {
    return;
  }
  table.deleteRow(table.rows.length - 1);
  updateButtons();
};

columnButtons.append.onclick = function () {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  for (const tr of table.rows) {
    tr.appendChild(document.createElement('td'));
  }
  updateButtons();
};

columnButtons.remove.onclick = function () {
  if (table.rows[0].cells.length <= 2) {
    return;
  }

  for (const tr of table.rows) {
    tr.deleteCell(tr.cells.length - 1);
  }
  updateButtons();
};
updateButtons();
