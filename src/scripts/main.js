'use strict';

const tbody = document.querySelector('tbody');

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

removeColumn.addEventListener('click', () => {
  const row = document.querySelectorAll('tr');

  [...row].map(tr => {
    tr.lastElementChild.remove();

    switch (tr.childElementCount) {
      case 2:
        removeColumn.disabled = true;
        break;

      case 9:
        addColumn.disabled = false;
        break;
    }
  });
});

addColumn.addEventListener('click', () => {
  const row = document.querySelectorAll('tr');

  [...row].map(tr => {
    const td = document.createElement('td');

    tr.append(td);

    switch (tr.childElementCount) {
      case 3:
        removeColumn.disabled = false;
        break;

      case 10:
        addColumn.disabled = true;
        break;
    }
  });
});

addRow.addEventListener('click', () => {
  const row = document.querySelectorAll('tr');

  tbody.append(row[0].cloneNode(true));

  switch (tbody.childElementCount) {
    case 3:
      removeRow.disabled = false;
      break;

    case 10:
      addRow.disabled = true;
      break;
  }
});

removeRow.addEventListener('click', () => {
  tbody.lastChild.remove();

  switch (tbody.childElementCount) {
    case 2:
      removeRow.disabled = true;
      break;

    case 9:
      addRow.disabled = false;
      break;
  }
});
