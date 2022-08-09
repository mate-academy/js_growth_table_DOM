'use strict';

document.addEventListener('click', (e) => {
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');

  const table = document.querySelector('table');
  const rows = document.querySelectorAll('tr');

  const limitUp = 9;
  const limitDown = 3;

  let rowsLimit = rows.length;
  let columnsLimit = rows[0].children.length;

  if (e.target === appendRow) {
    const clone = rows[0].cloneNode(true);

    table.firstElementChild.append(clone);
    rowsLimit++;
  };

  if (e.target === removeRow) {
    table.firstElementChild.lastElementChild.remove();
    rowsLimit--;
  };

  if (e.target === appendColumn) {
    for (let i = 0; i < rows.length; i++) {
      const addColumn = document.createElement('td');

      rows[i].insertAdjacentElement('beforeend', addColumn);
    };

    columnsLimit++;
  }

  if (e.target === removeColumn) {
    for (let j = 0; j < rows.length; j++) {
      rows[j].lastElementChild.remove();
    }

    columnsLimit--;
  }

  if (rowsLimit > limitUp) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }

  if (rowsLimit < limitDown) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (columnsLimit > limitUp) {
    appendColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }

  if (columnsLimit < limitDown) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
});
