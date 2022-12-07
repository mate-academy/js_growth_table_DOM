'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field').children[0];

appendRow.onclick = () => {
  const rows = table.children;
  const newRow = document.createElement('tr');

  removeRow.disabled = false;
  newRow.innerHTML = rows[0].innerHTML;
  table.append(newRow);

  if (rows.length > 9) {
    appendRow.disabled = true;
  }
};

removeRow.onclick = () => {
  const rows = table.children;

  appendRow.disabled = false;
  rows[0].remove();

  if (rows.length < 3) {
    removeRow.disabled = true;
  }
};

appendColumn.onclick = () => {
  const rows = table.children;

  removeColumn.disabled = false;

  [...rows].map(row => {
    const newSquare = document.createElement('td');

    row.append(newSquare);
  });

  if (rows[0].children.length > 9) {
    appendColumn.disabled = true;
  }
};

removeColumn.onclick = () => {
  const rows = table.children;

  appendColumn.disabled = false;

  [...rows].map(row => {
    row.children[0].remove();
  });

  if (rows[0].children.length < 3) {
    removeColumn.disabled = true;
  }
};
