'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const field = document.querySelector('.field');

// to add row - add 1 new <td> to each <tr>s
// to add column - add new <tr> to the table with same amount of <td>s

function updateButtonsState() {
  const rowsCount = field.querySelectorAll('tr').length;
  const columnsCount = field.querySelector('tr').children.length;

  appendRow.disabled = rowsCount >= 10;
  removeRow.disabled = rowsCount <= 2;

  appendColumn.disabled = columnsCount >= 10;
  removeColumn.disabled = columnsCount <= 2;
}

appendColumn.addEventListener('click', () => {
  const trs = field.querySelectorAll('tr');

  trs.forEach((tr) => {
    const td = document.createElement('td');

    tr.appendChild(td);
  });

  updateButtonsState();
});

removeColumn.addEventListener('click', () => {
  const trs = field.querySelectorAll('tr');

  trs.forEach((tr) => {
    const td = tr.lastElementChild;

    td.remove();
  });

  updateButtonsState();
});

appendRow.addEventListener('click', () => {
  const tbody = field.querySelector('tbody');
  const tr = document.createElement('tr');

  const columnsCount = field.querySelector('tr').children.length;

  for (let i = 0; i < columnsCount; i++) {
    tr.append(document.createElement('td'));
  }

  tbody.append(tr);

  updateButtonsState();
});

removeRow.addEventListener('click', () => {
  const tbody = field.querySelector('tbody');

  tbody.lastElementChild.remove();

  updateButtonsState();
});
