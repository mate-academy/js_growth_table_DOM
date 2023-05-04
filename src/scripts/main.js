'use strict';

const tBody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

const rowsAppend = (e) => {
  const newRow = tBody.lastElementChild.cloneNode(true);

  tBody.append(newRow);

  tBody.childElementCount > 9
    ? appendRow.disabled = true
    : removeRow.disabled = false;
};

const rowsRemove = (e) => {
  tBody.removeChild(tBody.lastElementChild);

  tBody.childElementCount < 3
    ? removeRow.disabled = true
    : appendRow.disabled = false;
};

const columnsEdit = () => {
  [...tBody.rows].forEach(row => {
    const newColumn = document.createElement('td');

    row.append(newColumn);
  });

  tBody.rows[0].childElementCount > 9
    ? appendColumn.disabled = true
    : removeColumn.disabled = false;
};

const columnsRemove = (e) => {
  [...tBody.rows].forEach(row => {
    row.removeChild(row.lastElementChild);
  });

  tBody.rows[0].childElementCount < 3
    ? removeColumn.disabled = true
    : appendColumn.disabled = false;
};

appendRow.addEventListener('click', rowsAppend);
appendColumn.addEventListener('click', columnsEdit);
removeColumn.addEventListener('click', columnsRemove);
removeRow.addEventListener('click', rowsRemove);
