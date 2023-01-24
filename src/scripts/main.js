'use strict';

const container = document.querySelector('.container');
const appendRow = container.querySelector('.append-row');
const removeRow = container.querySelector('.remove-row');
const appendColumn = container.querySelector('.append-column');
const removeColumn = container.querySelector('.remove-column');
const field = container.querySelector('.field');
let tr = container.querySelectorAll('tr');
let rowCount = tr.length;
let columnCount = tr[0].querySelectorAll('td').length;

function updateInfo(lineCount, appendButton, removeButton) {
  if (lineCount <= 2) {
    appendButton.disabled = false;
    removeButton.disabled = true;
  } else if (lineCount > 2 && lineCount < 10) {
    appendButton.disabled = false;
    removeButton.disabled = false;
  } else {
    appendButton.disabled = true;
    removeButton.disabled = false;
  }

  return 0;
}

appendRow.addEventListener('click', e => {
  if (!e.target.closest('.append-row')) {
    return;
  }

  tr = container.querySelectorAll('tr');

  const td = tr[0].querySelectorAll('td');

  field.insertAdjacentHTML('afterbegin', `
    <tr>
      ${[...td].map(el => `
        <td></td>
      `).join('')}
  `);

  rowCount = container.querySelectorAll('tr').length;

  updateInfo(rowCount, appendRow, removeRow);
});

removeRow.addEventListener('click', e => {
  if (!e.target.closest('.remove-row')) {
    return;
  }

  tr = container.querySelectorAll('tr');
  tr[tr.length - 1].remove();
  rowCount = container.querySelectorAll('tr').length;
  updateInfo(rowCount, appendRow, removeRow);
});

appendColumn.addEventListener('click', e => {
  if (!e.target.closest('.append-column')) {
    return;
  }

  tr = container.querySelectorAll('tr');

  for (const el of tr) {
    el.insertAdjacentHTML('afterbegin', `
      <td></td>
    `);
  }

  rowCount = container.querySelectorAll('tr').length;
  columnCount = tr[0].querySelectorAll('td').length;
  updateInfo(columnCount, appendColumn, removeColumn);
});

removeColumn.addEventListener('click', e => {
  if (!e.target.closest('.remove-column')) {
    return;
  }

  tr = container.querySelectorAll('tr');

  for (const el of tr) {
    el.children[0].remove();
  }

  rowCount = container.querySelectorAll('tr').length;
  columnCount = tr[0].querySelectorAll('td').length;
  updateInfo(columnCount, appendColumn, removeColumn);
});
